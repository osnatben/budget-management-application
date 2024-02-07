import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Information from './Information';


export default function OutlinedCard({ image, text }) {
  const bull = (

    <Box    >
    </Box>
  );






  return (
    <Box sx={{ minWidth: 400 }} >
      <Card variant="outlined">
        <div  >
          <CardMedia
            sx={{ maxWidth: 350 }}  //logo         
            component="img" height="100%"
            width="100%"
            image={image}
            className='form'
          />
          <Information ></Information>
        </div>
      </Card>
    </Box>
  );
}
