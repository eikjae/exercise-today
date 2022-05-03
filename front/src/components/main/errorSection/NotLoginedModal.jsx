import { Modal, Box, Typography } from "@mui/material";

export default function NotLoginedModal({ showModal, closeModal }) {
  return (
    <Modal
      open={showModal}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          경고
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          로그인 후에 사용하실 수 있는 서비스입니다.
        </Typography>
      </Box>
    </Modal>
  );
}
