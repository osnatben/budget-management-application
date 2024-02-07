import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddService from './addService';

export default function MultiActionAreaCard() {

  const [isAdd, setisAdd] = React.useState(false)
  
  return (
    <>

      <Card sx={{ minWidth: 300, minHeight: 100, margin: 1 }}>
        <CardActionArea>
          <Box sx={{ '& > :not(style)': { m: 2 } }}>
            <Typography variant="body2" color="text.secondary">
            </Typography>
            <Fab sx={{ margin: 5 }} color="primary" aria-label="add" onClick={() => setisAdd(true)}>
              <AddIcon />
            </Fab>
          </Box>
        </CardActionArea>
      </Card>
      {isAdd ? <AddService /> : null}
    </>
  );
}

