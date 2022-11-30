import { Box, Modal } from "@mui/material";
import React from "react";
import RegisterForm from "../Home/RegisterForm";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const RegisterModal = ({ openRegister, setOpenRegister }) => {

  const handleClose = () => setOpenRegister(false);

  return (
    <div>
      <Modal
        open={openRegister}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <RegisterForm setOpenRegister={setOpenRegister} />
        </Box>
      </Modal>
    </div>
  );
};

export default RegisterModal;