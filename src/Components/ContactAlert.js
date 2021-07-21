import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import mprotrade from '../images/mprotrade.png';

export default function AlertDialog({handleSubmit}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    handleSubmit(e)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button onClick={handleClickOpen}
        style={{
            width:100,
            height:40,
            margin:10,
            color:"#ffffff",
            fontWeight:600,
            backgroundColor:"#000000",
            borderRadius:30,
            paddingTop:10
      }}
        >
        Submit
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
            Tha admin will reply to your question via email asap
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
