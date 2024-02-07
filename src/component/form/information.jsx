import React from 'react'
import { useState, useEffect } from 'react';
import { Button, TextField, Typography, } from '@mui/material';
import UserStore from '../../store/UserStore';
import SelectPlan from './SelectPlan';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SelectForm from './SelectForm';
// import ChooseDate from './ChooseDate';
import TextErea from './TextErea';
import { Stack } from '@mui/system';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useSelector, useDispatch } from 'react-redux';
import { AddMeeting } from '../Data/MeetingServer';






const Information = ({ handleClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        appointment: '',
        DateTime: '',
        crown: '',
        fewWords: '',
        AmountUtilize: ''

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
       
        setFormData({ ...formData, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        AddMeeting(formData)
            .then(x => { handleClose() })
            .catch(x => {
                //הודעה בנפילה בצבע  אדום במקום ALERT
            });

    };

    return (
        <>
            <section>
                <form onSubmit={handleSubmit} >
                    <Stack direction={'row'} gap={2} >
                        <TextField type="text" id="name" label="name" name='name' variant="outlined" color="secondary" className="input-item"
                            sx={{ maxWidth: 200 }} autoComplete='off' value={formData.name} onChange={handleChange}  required/>

                        {/* בחירת אגף */}
                        <SelectForm title='appointment' setFormData={setFormData} formData={formData} select1={'חינוך'} select2={'תרבות'} select3={'רווחה'} select4={'קהילה'} ></SelectForm>
                    </Stack>

                    <Stack direction={'row'} gap={2}>
                        <TextField type="email" name="email" id="email" label="email" variant="outlined" color="secondary" // ref={userRef}
                            sx={{ maxWidth: 200 }} autoComplete='off' value={formData.email} onChange={handleChange} required />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker required sx={{ maxWidth: 200, margin: 0 }} id="dateTime1" name="dateTime" value={formData.dateTime} onChange={(newDate) => handleChange({ target: { name: 'dateTime', value: newDate.$d } })} />
                        </LocalizationProvider>
                        {/* <ChooseDate></ChooseDate> */}
                    </Stack>
                    <br />

                    {/* -- בחירת תוכנית  */}
                    <SelectPlan sx={{ minWidth: 200 }} title='plan' setFormData={setFormData} formData={formData}></SelectPlan>
                    {/* <br /> */}

                    <Stack direction={'row'} gap={2}>

                        {/* בחירת קהל יעד */}
                        <SelectForm title='crowd' setFormData={setFormData} formData={formData} select1={'גיל הרך'} select2={'נוער'} select3={'צעירים'} select4={'מבוגרים'}></SelectForm>

                        {/* סכום לניצול */}
                        <TextField type="number" name="AmountUtilize" label="סכום תקציב לפעילות" variant="outlined" color="secondary" onChange={handleChange}
                            defaultValue={5000} sx={{ maxWidth: 200 }} slotprops={{ input: { min: 1000, max: 150000, step: 1000, } }} required />

                    </Stack>

                    <TextErea title="fewWords" onChange={handleChange} formData={formData}></TextErea>

                    <br />

                    <Button type='submit' variant="contained" color="secondary"
                        onClick={handleSubmit}
                    >להעביר בקשה</Button>

                </form>
            </section>
        </>
    )
}
export default Information;
