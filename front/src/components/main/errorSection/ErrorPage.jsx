import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Layout,
  ErrorBar,
  ErrorIcon,
  ErrorTitle,
  ErrorDetail,
  ErrorButton,
} from "./ErrorPage.style";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <ErrorBar />
      <ErrorIcon />
      <ErrorTitle>접근 불가능한 페이지입니다</ErrorTitle>
      <ErrorDetail>아래 버튼을 누르면 메인 페이지로 이동합니다</ErrorDetail>
      <ErrorButton onClick={() => navigate("/")}>메인 페이지로</ErrorButton>
      <ErrorBar />
    </Layout>
  );
}
