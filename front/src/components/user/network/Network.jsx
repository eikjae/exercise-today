/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "../../../api";
import UserCard from "../userSection/UserCard";
import { UserStateContext } from "../../../App";
import { Layout } from "./Network.style";

function Network() {
  const navigate = useNavigate();
  const userState = useContext(UserStateContext);
  // useState 훅을 통해 users 상태를 생성함.
  const [users, setUsers] = useState([]);
  const [likedUsers, setLikedUsers] = useState([]);

  useEffect(async () => {
    // 만약 전역 상태의 user가 null이라면, 로그인 페이지로 이동함.
    if (!userState.user) {
      navigate("/login");
      return;
    }
    try {
      // "userlist" 엔드포인트로 GET 요청을 하고, users를 response의 data로 세팅함.
      await Api.get("userlist").then((res) => setUsers(res.data));

      // 자신이 좋아요한 유저 목록을 가져와서 세팅
      const res = await Api.get("like/person");
      const likedUsers = res.data;
      setLikedUsers([...likedUsers]);
      console.log(likedUsers);
    } catch (err) {
      console.error(err);
    }
  }, [userState, navigate]);

  return (
    <Layout>
      {users.map((user) => (
        <UserCard key={user.id} user={user} likedUsers={likedUsers} isNetwork />
      ))}
    </Layout>
  );
}

export default Network;
