import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import mprotrade from '../images/mprotrade.png';

export default function AlertDialog({update}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    update(e);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button onClick={handleClickOpen}
        style={{
            marginTop: 10,
            backgroundColor :"#000",
            color:"#ffffff",
            fontWeight:600,
            height:50,
            width:120,
            borderRadius:50,
            paddingTop:10,
            marginBottom:20
      }}
        >
        Update
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"><img src={mprotrade} alt="img" style={{width:'40%'}} /></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{color:'black'}}>
          Your profile is successfully updated
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{color:'black',fontWeight:600}}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
