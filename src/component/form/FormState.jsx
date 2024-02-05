import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Input as BaseInput } from '@mui/base/Input';
import { Stack, styled } from '@mui/system';
import { Input } from '@mui/base/Input';
import Information from './Information';
import { Select } from '@mui/material';


export default function OutlinedCard({ image, text }) {
  const bull = (

    <Box
    // component="span"
    // sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >

    </Box>
  );





  // const card = (
  //     */}


  //   </div>
  // );
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
          {/* <Stack direction={'row'}gap={2} >
            <p>a</p>
            <p>a</p>
          </Stack>
          <Stack direction={'row'}>
            <p>b</p>
            <p>b</p>
          </Stack> */}

          <Information ></Information>
        </div>

        {/* {card} */}
      </Card>
    </Box>
  );
}
