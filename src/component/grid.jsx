import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from './user/Card'
import kkl from '../assets/image/kkl.png'
import efshari from '../assets/image/efshri.png'
import ruach from '../assets/image/ruach.png'
import tarbut from '../assets/image/משרד התרבות והספורט.png'
import ralbad from '../assets/image/ralbad.png'
import mashiv from '../assets/image/משיב הרוח.png'
import logo from '../assets/image/החברה למתנסים.png'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function NestedGridColumns() {

  return (
    <>
      <img src={logo}  className='logo'/>
      <h1 >ניצול תקציבים</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={24}>
          <Grid xs={8}>
            <Card title={"קרן קיימת לישראל"} image={kkl} text={"חשיפת הנוער והמבוגר לאיכות הסביבה הירוקה ושמירת הטבע הטהור"}></Card>
          </Grid>
          <Grid container xs={16}>
            <Grid xs={12}>
              <Card title={"אפשרי בריא"} image={efshari} text={"הדגשת חשיבות אורך חיים בריא לכל אורך החיים"}></Card>
            </Grid>
            <Grid xs={12}>

              <Card title={"רוח תרבות"} image={ruach} text={"קידום החוסן החברתי ומיקומו של הפרט בתוך הכלל"}></Card>
            </Grid>
          </Grid>
          <Grid xs={8}>
            {/* <Item>xs=8/24</Item> */}
            <Card title={"משרד התרבות והספורט"} image={tarbut} text={"התרבות והספורט מהווים את אושיות דמותה של חברה איכותית ובריאה"}></Card>
          </Grid>
          <Grid container xs={16} columns={12}>
            <Grid xs={6}>
              {/* <Item>nested xs=6/12</Item> */}
              <Card title={"רלבד"} image={ralbad} text={"הטמעת כללי זהירות בדרכים בדור העתיד"}></Card>
            </Grid>
            <Grid xs={6}>
              {/* <Item>nested xs=6/12</Item> */}
              <Card title={"משיב הרוח"} image={mashiv} text={"סיוע בשיקום ענף התרבות ולטובת פעילות הפגה עבור מאות אלפי מפונים ותושבים בכל ברחבי הארץ"}></Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}