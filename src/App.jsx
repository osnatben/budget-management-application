import { createContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import LogIn from './component/logIn/LogIn'
import { Button, CardActionArea, CardActions } from '@mui/material';
import MultiActionAreaCard from './component/user/Card'
import Grid from './component/Grid'
import FormState from './component/form/FormState';
import kkl from './assets/image/kkl.png'
import ChooseDate from './component/form/ChooseDate';

import Card from './component/user/Card'
import PopUp from './component/form/PopUp'
// import Grid from '@mui/material/Grid'; // Grid version 1
// import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2



// export const UseContex=createContext(null);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ThemeContex.Provider value={manager}> */}

      <LogIn></LogIn>
      {/* <PopUp></PopUp> */}
      {/* <Grid></Grid> */}
      {/* <MultiActionAreaCard></MultiActionAreaCard> */}

      {/* <ChooseDate></ChooseDate> */}

      {/* <Grid></Grid> */}
      {/* <FormState title={"קרן קיימת לישראל"} image={kkl} text={"חשיפת הנוער והמבוגר לאיכות הסביבה הירוקה ושמירת הטבע הטהור"}></FormState> */}
      {/* <ClipboardCopy></ClipboardCopy> */}
      {/* <Card></Card> */}

      {/* </ThemeContex.Provider> */}


    </>
  )
}

export default App
