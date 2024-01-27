import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';
import { Input } from '@mui/base/Input';
import Information from './Information';
import { Select } from '@mui/material';




export default function OutlinedCard({image,text}) {
  const bull = (
    <Box
      // component="span"
      // sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      
    </Box>
  );
  
  const card = (
    <React.Fragment  >
      <CardMedia  sx={{ maxWidth: 350 }}  //logo   
          component="img"
          height="100%"
          width="100%"          
          image={image} 
          className='form'                 
        />     
<h3>מספר בקשה + count</h3>

<Information ></Information> 

    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 1000 }} >
      <Card variant="outlined">
        {card}
      </Card>      
    </Box>
  );
}
