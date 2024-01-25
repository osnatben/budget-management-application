import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Form from '../form/FormState';
// import image from '../assets/image';

export default function MultiActionAreaCard({title,image,text}) {

  return (
    <Card  sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="150"          
          image={image} 
          className='card'         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"         
        //  onClick={move}        
         >
         
        Share       
        </Button>
      </CardActions>
    </Card>
  );
}

