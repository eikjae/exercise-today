import { Modal } from "@mui/material";
import {
  ModalBox,
  ErrorContent,
  ErrorIcon,
  ErrorTitle,
  ErrorDetail,
} from "./NotLoginedModal.style";
export default function NotLoginedModal({ showModal, closeModal }) {
  return (
    <Modal
      open={showModal}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBox>
        <ErrorContent>
          <ErrorIcon />
          <ErrorTitle>알림</ErrorTitle>
        </ErrorContent>
        <ErrorDetail>로그인 후에 사용할 수 있는 서비스입니다.</ErrorDetail>
      </ModalBox>
    </Modal>
  );
}
