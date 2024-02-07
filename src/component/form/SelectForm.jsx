import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function BasicSelect({ title, select1, select2, select3, select4, formData, setFormData }) {

  const handleChange = (event) => {
    setFormData({ ...formData, [title]: event.target.value })
  };

  return (
    <Box >
      <FormControl sx={{ minWidth: 200 }}   >
        <InputLabel  id="demo-simple-select-label" sx={{margin:0}}>{title} </InputLabel>
        <Select className="input-item"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData[title]}
          label="department"
          onChange={handleChange}
        >
          <MenuItem value={select1}>{select1}</MenuItem>
          <MenuItem value={select2}>{select2}</MenuItem>
          <MenuItem value={select3}>{select3}</MenuItem>
          <MenuItem value={select4}>{select4}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}