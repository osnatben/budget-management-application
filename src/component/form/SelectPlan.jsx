// import * as React from 'react';
// import List from '@mui/joy/List';
// import ListItem from '@mui/joy/ListItem';
// import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import Radio from '@mui/joy/Radio';
// import RadioGroup from '@mui/joy/RadioGroup';
// import Person from '@mui/icons-material/Person';
// import People from '@mui/icons-material/People';
// import Apartment from '@mui/icons-material/Apartment';
// import MovieFilterIcon from '@mui/icons-material/MovieFilter';
// import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
// import Diversity2Icon from '@mui/icons-material/Diversity2';
// import AutoModeIcon from '@mui/icons-material/AutoMode';
// import { Grid } from '@mui/material';

// const RadioPositionEnd = ({ setFormData, formData, title }) => {
//   const handleChange = (event) => {
//     setFormData({ ...formData, [title]: event.target.value });
//   };

//   return (
//     <RadioGroup aria-label="Your plan" name="people" defaultValue="Individual">
//       <List
//         sx={{
//           '& > .MuiListItem-root': {
//             borderRadius: '8px',
//             paddingY: '0.2rem',
//             gap: '0.5rem',
//             maxWidth: '180px',
//           },
//         }}
//       >
//         {['תוכנית להחדרת ערכי החברה', 'סדנה להתנסות בשטח', 'הרצאה על חשיבות הערכים', 'הקרנה ממחישה את העקרונות '].map((item, index) => (
//           <ListItem variant="outlined" key={item}>
//             <ListItemDecorator>
//               {[<AutoModeIcon />, <Diversity2Icon />, <KeyboardVoiceIcon />, <MovieFilterIcon />][index]}
//             </ListItemDecorator>
//             <Radio
//               onChange={handleChange}
//               overlay
//               value={item}
//               label={item}
//               sx={{ flexGrow: 2, flexDirection: 'row-reverse' }}
//               slotprops={{
//                 action: ({ checked }) => ({
//                   sx: (theme) => ({
//                     ...(checked && {
//                       inset: -1,
//                       border: '2px solid',
//                       borderColor: theme.vars.palette.primary[500],
//                     }),
//                   }),
//                 }),
//               }}
//             />
//           </ListItem>
//         ))}
//       </List>
//     </RadioGroup>
//   );
// };

// export default RadioPositionEnd;
import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Person from '@mui/icons-material/Person';
import People from '@mui/icons-material/People';
import Apartment from '@mui/icons-material/Apartment';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import { Grid } from '@mui/material';

const RadioPositionEnd = ({ setFormData, formData, title }) => {
  const handleChange = (event) => {
    setFormData({ ...formData, [title]: event.target.value });
  };

  return (
    <RadioGroup aria-label="Your plan" name="people" defaultValue="Individual">
      <List sx={{
        borderRadius: 5,
        margin: 1,
        padding:0.1,
        gap: 2.5,
        minWidth: 400,
        width: 200,
      }
      }>
        <Grid container spacing={2}>
          {['תוכנית להחדרת ערכים', 'סדנה להתנסות בשטח', 'הרצאה על חשיבות הערכים', 'הקרנה ממחישת עקרונות '].map((item, index) => (
            <Grid item key={item} xs={6}>
              <ListItem variant="outlined">
                <ListItemDecorator>
                  {[<AutoModeIcon />, <Diversity2Icon />, <KeyboardVoiceIcon />, <MovieFilterIcon />][index]}
                </ListItemDecorator>
                <Radio
                  onChange={handleChange}
                  overlay
                  value={item}
                  label={item}
                  slotprops={{
                    action: ({ checked }) => ({
                      sx: (theme) => ({
                        ...(checked && {
                          inset: -1,
                          border: '2px solid',
                          borderColor: theme.vars.palette.primary[500],
                        }),
                      }),
                    }),
                  }}
                />
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </List>
    </RadioGroup>
  );
};

export default RadioPositionEnd;

