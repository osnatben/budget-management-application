import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import BusinessDetailsStore from '../Data/BusinessDetailsStore';
import { UpdateBusiness } from '../Data/BusinessDetailsServer';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const name = formJson.name;
            console.log(formJson);

            UpdateBusiness(formJson)
            handleClose();
          },
        }}
      >
        <DialogTitle>שינוי פרטי עסק</DialogTitle>
        <DialogContent>
          <TextField margin="dense" id="name" name="name" label="name" type="text" variant="standard" defaultValue={BusinessDetailsStore.businessDetails.name} />
          <TextField margin="dense" id="description" name="description" label="description" type="text" variant="standard" defaultValue={BusinessDetailsStore.businessDetails.description} />
          <TextField margin="dense" id="address" name="address" label="address" type="text" variant="standard" defaultValue={BusinessDetailsStore.businessDetails.address} />
          <TextField margin="dense" id="phone" name="phone" label="phone" type="text" variant="standard" defaultValue={BusinessDetailsStore.businessDetails.phone} />
          <TextField margin="dense" id="owner" name="owner" label="owner" type="text" variant="standard" defaultValue={BusinessDetailsStore.businessDetails.owner} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button type="submit">שמירה</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
