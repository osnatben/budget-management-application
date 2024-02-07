import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import PopUp from '../form/PopUp'

export default function MultiActionAreaCard({ title, image, text }) {

  return (
    <Card sx={{ maxWidth: 300, maxHeight: 350 }}>
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
        <PopUp title={title}></PopUp>
      </CardActions>
    </Card>
  );
}

