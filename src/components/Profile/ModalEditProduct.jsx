import { Box, Modal } from "@mui/material";
import React from "react";
import EditProdutcForm from "./EditProdutcForm";

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

const ModalEditProduct = ({ open, setOpen, product }) => {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditProdutcForm setOpen={setOpen} product={product} />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalEditProduct;
