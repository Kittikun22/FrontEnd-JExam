import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


export default function SnackbarAlert({ message, open, setOpen, color }) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        autoHideDuration={1500}
        onClose={handleClose}
        sx={{ mt: { xs: '60px', md: '50px' } }}
      >
        <Alert onClose={handleClose} severity={color} sx={{ width: '100%', }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}