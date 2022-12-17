import {Modal, Box,Typography, TextField, Button} from '@mui/material'


const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 12,
  p: 4,
  display:'flex',
  flexDirection:'column'
};

export default function AddTopicModal({handleClose, modalOpen}) {


  return (
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New Topic
          </Typography>
          <TextField sx={{ my: 2 }}  label="Topic" variant="outlined" />
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Button variant="contained" color="success">Add</Button>
            <Button onClick={handleClose} variant="outlined" color="error">Cancel</Button>
          </Box>
        </Box>
      </Modal>
  );
}