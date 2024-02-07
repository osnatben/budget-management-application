import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormState from './FormState'
import UserStore from '../../store/UserStore';
import Information from './Information';



export default function FormDialog({ title }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const sendReq=()=>{
        // alert(UserStore.aplly.name)
    }

    // const count = 1234;

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen} >
                הגשת בקשה
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    // component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    {/* <FormState></FormState> */}
                    <Information handleClose={handleClose}></Information>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>ביטול</Button>
                    {/* <Button onClick={sendReq}>שליחת בקשה</Button> */}
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
