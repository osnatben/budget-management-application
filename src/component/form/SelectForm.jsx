import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function BasicSelect({title,select1,select2,select3,select4}) {
  const [department, setDepartment] = React.useState('');

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title} </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          label="department"
          onChange={handleChange}
        >
          <MenuItem value={10}>{select1}</MenuItem>
          <MenuItem value={20}>{select2}</MenuItem>
          <MenuItem value={30}>{select3}</MenuItem>
          <MenuItem value={40}>{select4}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}