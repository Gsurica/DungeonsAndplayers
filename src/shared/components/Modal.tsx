import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface BasicModalTypes {
  openModalHandler: () => void
  isOpen: boolean
  nameOfClass: string 

}

export const BasicModal: React.FC<BasicModalTypes> = ({ isOpen, openModalHandler, nameOfClass }) => {

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={openModalHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{}}>
            <Typography>{ nameOfClass }</Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}