import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from './user/Card'
// import kkl from '../assets/image/kkl.png'
// import efshari from '../assets/image/efshri.png'
// import ruach from '../assets/image/ruach.png'
// import tarbut from '../assets/image/משרד התרבות והספורט.png'
// import ralbad from '../assets/image/ralbad.png'
// import mashiv from '../assets/image/משיב הרוח.png'
// import logo from '../assets/image/החברה למתנסים.png'
import CardAdmin from './admin/CardAdmin'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';
import serviceStore from './Data/serviceStore';
import BusinessDetailsStore from './Data/BusinessDetailsStore'
import { getServices } from './Data/serviceServer';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const NestedGridColumns = observer(() => {
  React.useEffect(() => {
    if (!serviceStore.services.length) {
      getServices()
    }
  }, [])

  return (
    <>
      <Box sx={{ flexGrow: 1 }}  >
        {BusinessDetailsStore.isLogin ? <CardAdmin sx={{}} ></CardAdmin> : null}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 2fr))', gap: '16px' }}>
          {serviceStore.services.map(x => (<Card key={x.id} title={x.name} image={x.image} text={x.text} />))}
        </div>
      </Box>
    </>
  );
})

export default NestedGridColumns