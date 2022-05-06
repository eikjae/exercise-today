/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import UserEditForm from "./UserEditForm";
import UserCard from "./UserCard";
import * as Api from "../../../api";
import { useRecoilValue } from "recoil";
import { isInfoChangedState } from "./UserAtom";

function User({ myPageOwnerId, isEditable }) {
  // useState 훅을 통해 isEditing 상태를 생성함.
  const [isEditing, setIsEditing] = useState(false);
  // useState 훅을 통해 user 상태를 생성함.
  const [user, setUser] = useState(null);
  const isInfoChanged = useRecoilValue(isInfoChangedState);

  useEffect(() => {
    // "users/유저id" 엔드포인트로 GET 요청을 하고, user를 response의 data로 세팅함.
    Api.get("users", myPageOwnerId).then((res) => setUser(res.data));
  }, [myPageOwnerId, isInfoChanged]);

  return (
    <>
      {isEditing ? (
        <UserEditForm
          user={user}
          setIsEditing={setIsEditing}
          setUser={setUser}
        />
      ) : (
        <UserCard
          user={user}
          setIsEditing={setIsEditing}
          isEditable={isEditable}
        />
      )}
    </>
  );
}

export default User;
