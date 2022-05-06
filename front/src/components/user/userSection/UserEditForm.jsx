/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import * as Api from "../../../api";
import {
  EditLayout,
  CardBody,
  CardImg,
  EditButtonWrapper,
  EditPWMessage,
  ChangeDefaultWrapper,
  ChangeDefaultImgButton,
} from "./UserCard.style";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import { isInfoChangedState } from "./UserAtom";

function UserEditForm({ user, setIsEditing, setUser }) {
  //useState로 name 상태를 생성함.
  const [name, setName] = useState(user.name);
  //useState로 email 상태를 생성함.
  const [email, setEmail] = useState(user.email);
  //useState로 description 상태를 생성함.
  const [description, setDescription] = useState(user.description);

  // 비밀번호 변경 위치 논의 필요
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  //선택된 이미지의 상태
  const [pickedImage, setPickedImage] = useState({
    preview: "",
    data: "",
  });
  const [originImage, setOriginImage] = useState("");
  const [isDefaultImage, setIsDefaultImage] = useState(false);
  const setIsInfoChanged = useSetRecoilState(isInfoChangedState);

  // 이미지 미리보기
  useEffect(async () => {
    try {
      const res = await Api.get(`users/${user.id}`);
      setOriginImage(res.data.imageLink);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 비밀번호 수정 관련
      if (newPassword.length >= 4) {
        const res = await Api.put(`users/${user.id}/changePassword`, {
          currentPassword,
          newPassword,
        });
        if (res.status === 200) {
          toast.success("비밀번호가 수정되었습니다.");
        }
      } else if (newPassword.length < 4) {
        toast.warning("비밀번호가 그대로 유지됩니다.");
      }

      // "users/유저id" 엔드포인트로 PUT 요청함.
      const res = await Api.put(`users/${user.id}`, {
        name,
        email,
        description,
      });
      // 유저 정보는 response의 data임.
      const updatedUser = res.data;
      // 해당 유저 정보로 user을 세팅함.
      setUser(updatedUser);

      // 선택된 이미지가 있을 경우
      if (pickedImage.data !== "" && !isDefaultImage) {
        const formData = new FormData();
        formData.append("userImg", pickedImage.data);
        await Api.putImg(`users/${user.id}/profileImage`, formData);
      }

      // isEditing을 false로 세팅함.
      setIsEditing(false);
      // 정보가 바뀌었음을 알려주어 재렌더링 되도록 함
      setIsInfoChanged((prev) => !prev);
      return toast.success("회원 정보가 수정되었습니다.");
    } catch (err) {
      console.error(err);
      return toast.error("현재 비밀번호가 올바르지 않습니다");
    }
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setPickedImage(img);
    setIsDefaultImage(false);
  };

  const handleClickDefaultImg = async (e) => {
    const res = await Api.put(`users/${user.id}/defaultProfileImage`);
    setOriginImage(res.data.imageLink);
    setIsDefaultImage(true);
  };

  return (
    <EditLayout>
      <CardBody>
        {pickedImage.preview && !isDefaultImage ? (
          <CardImg src={pickedImage.preview} alt="profile_image" />
        ) : (
          <CardImg src={originImage} />
        )}
        <Form.Group>
          <Form.Control
            type="file"
            accept="pickedImage/*"
            onChange={handleFileChange}
          />
        </Form.Group>
        <ChangeDefaultWrapper>
          <ChangeDefaultImgButton onClick={handleClickDefaultImg}>
            기본 이미지로
          </ChangeDefaultImgButton>
        </ChangeDefaultWrapper>
        <Form.Group controlId="useEditName" className="mb-3">
          <Form.Control
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="userEditEmail" className="mb-3">
          <Form.Control
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="userEditDescription" className="mb-3">
          <Form.Control
            type="text"
            placeholder="정보, 인사말"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <EditPWMessage>비밀번호 변경 희망 시 입력해주세요</EditPWMessage>
        <Form.Group controlId="userCurrentPassword" className="mb-3">
          <Form.Control
            type="password"
            placeholder="현재 비밀번호"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="userEditPassword">
          <Form.Control
            type="password"
            placeholder="변경 비밀번호"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form.Group>
        <EditButtonWrapper>
          <Button variant="primary" className="me-3" onClick={handleSubmit}>
            확인
          </Button>
          <Button variant="secondary" onClick={() => setIsEditing(false)}>
            취소
          </Button>
        </EditButtonWrapper>
      </CardBody>
    </EditLayout>
  );
}

export default UserEditForm;
