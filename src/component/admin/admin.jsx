import { Link, useNavigate } from 'react-router-dom'
import { Outlet } from "react-router-dom";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BusinessDetailsStore from '../Data/BusinessDetailsStore';
import Details from '../details/Details';

export default function ScrollableTabsButtonPrevent() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const cliked = () => {
  //      navigate('/admin')
  // }

  return (
    <>
      <Details></Details>

      {BusinessDetailsStore.isLogin ?
        <Box sx={{ bgcolor: 'background.paper' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            // scrollButtons={false
            aria-label="scrollable prevent tabs example"
          >
            <Link to="requests"> <Tab label="בקשות המחכות לאישור " /></Link>
            <Link to="update"><Tab label="עדכון פרטי עסק" /></Link>
            <Link to="update"><Tab label="עדכון נתונים" /></Link>
            {/*         
        <Tab label="Item Seven" /> */}
          </Tabs>
          <Outlet />
        </Box> :
        navigate('/')
      }
    </>
  );
}