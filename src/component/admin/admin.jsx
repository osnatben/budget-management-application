import { Link, useNavigate } from 'react-router-dom'
import { Outlet } from "react-router-dom";
import * as React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BusinessDetailsStore from '../Data/BusinessDetailsStore';
import Details from '../details/Details';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { UpdateBusiness } from '../Data/BusinessDetailsServer';

import { orange } from '@mui/material/colors';
const color = orange[500];

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#ef6c00',//כתום
      dark: '##e65100',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#ef6c00',//כתום
      dark: '#e65100',
      contrastText: '#000',
    },
  },
});

export default function ScrollableTabsButtonPrevent() {
  const [open, setOpen] = React.useState(false);
  const [update, setUpdate] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Details></Details>
          {BusinessDetailsStore.isLogin ?
            <Box sx={{ bgcolor: 'background.paper' }}>

              <Link to="requests"> <Tab label="בקשות המחכות לאישור " /></Link>
              <Tab label="עדכון פרטי עסק" onClick={handleClickOpen} />
              <Link to="addService"><Tab label=" הוספת שירותים" /></Link>

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
                <DialogTitle>עריכת פרטי העסק</DialogTitle>
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
              <Outlet />
            </Box> :
            navigate('/')
          }
        </ThemeProvider>
      </React.Fragment>
    </>
  );
}
