import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import mprotrade from '../images/mprotrade.png';

export default function AlertDialog({buy}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    buy(e);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button onClick={handleClickOpen}
        style={{
          width:200,
          marginTop:10,
          color:"aliceblue",
          fontSize: 18,
          fontWeight:1000,
          backgroundColor:"#000000",
          borderRadius:30,
          paddingTop:10
      }}
        >
        Place Order
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
          The Purchase is done
          Total Price : $115.00
          Estimate delivery date is 2 days
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
