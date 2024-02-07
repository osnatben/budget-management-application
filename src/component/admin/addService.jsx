import React from 'react'
import { useState } from 'react';
import { Button, TextField, } from '@mui/material';
import { Stack } from '@mui/system';
import { AddServiceServer } from '../Data/serviceServer';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import kkl from '../../assets/image/kkl.png'
import efshari from '../../assets/image/efshri.png'
import ruach from '../../assets/image/ruach.png'
 import tarbut from '../../assets/image/משרד התרבות והספורט.png'
import ralbad from '../../assets/image/ralbad.png'
import mashiv from '../../assets/image/משיב הרוח.png'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const AddService = ({ handleClose }) => {


    const [formData, setFormData] = useState({
        name: '',
        image: '',
        text: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value })
    };
    const handleChangeImage = (e, name) => {
        const { value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        AddServiceServer(formData)
            .then(x => { handleClose() })
            .catch(x => {
                //הודעה בנפילה בצבע  אדום במקום ALERT
            });
        setFormData({
            name: '',
            image: '',
            text: '',
        });
    };

    return (
        <>
            <section>
                <form onSubmit={handleSubmit} >
                    <Stack direction={'row'} gap={4} >

                        <TextField type="text" id="name" label="שם החברה" name='name' variant="outlined" color="secondary" className="input-item"
                            sx={{ minWidth: 250 }} autoComplete='off' value={formData.name} onChange={handleChange} />

                        <TextField type="text" name="text" id="text" label="הגדרת הפעילות" variant="outlined" color="secondary" // ref={userRef}
                            sx={{ minWidth: 250 }} autoComplete='off' value={formData.text} onChange={handleChange} />

                        <FormControl sx={{ minWidth: 250 }}>
                            <InputLabel id="demo-simple-select-label" sx={{ margin: 0 }}>לוגו </InputLabel>
                            <Select className="input-item"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formData.image}
                                label="department"
                                onChange={(e) => handleChangeImage(e, 'image')}
                            >
                                <MenuItem value={kkl}>
                                    <CardMedia component="img" height="150" width="150" image={kkl} className='card' alt="kkl" />
                                </MenuItem>
                                <MenuItem value={ruach}>
                                    <CardMedia component="img" height="150" width="150" image={ruach} className='card' alt="ruach" />
                                </MenuItem>
                                <MenuItem value={mashiv}>
                                    <CardMedia component="img" height="150" width="150" image={mashiv} className='card' alt="mashiv" />
                                </MenuItem>
                                <MenuItem value={efshari}>
                                    <CardMedia component="img" height="150" width="150" image={efshari} className='card' alt="efshari" />
                                </MenuItem>
                                <MenuItem value={tarbut}>
                                    <CardMedia component="img" height="150" width="150" image={tarbut} className='card' alt="tarbut" />
                                </MenuItem>
                                <MenuItem value={ralbad}>
                                    <CardMedia component="img" height="150" width="150" image={ralbad} className='card' alt="ralbad" />
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>

                    <Button type='submit' variant="contained" color="secondary"
                    >הוספת שירות</Button>
                    <br /> <br />
                </form>
            </section>
        </>
    )
}
export default AddService;
