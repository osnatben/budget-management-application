import React from 'react'
import { useRef, useState, useEffect } from 'react';
// import Admin from '../Admin/admin';
// import User from '../User/user';
import { Button, TextField, Typography, } from '@mui/material';
import UserStore from '../../store/UserStore';
// import Check from './check';
import SelectPlan from './SelectPlan';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SelectForm from './SelectForm';
import ChooseDate from './ChooseDate';
import TextErea from './TextErea';






export default function LogIn() {

    const userRef = useRef();
    const errRef = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(0);

    useEffect(() => {
        userRef.current.focus();
    }, [])
    useEffect(() => {
        // setErrMsg('');
    }, [name, email])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, email);
        // setSuccess(UserStore.addUser=());


        setSuccess(UserStore.chackUser = { name, email });
        setSuccess(UserStore.chackUser = { name, email });
        console.log(success);
        setUser('');
        setPwd('');


    }


    return (
        <>
            <section>
                {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive">{errMsg}</p> */}
                <form onSubmit={handleSubmit}>

                    <TextField type="text" id="name" label="name" variant="outlined" color="secondary"
                        ref={userRef} autoComplete='off' onChange={(e) => setName(e.target.value)} value={name} required />

                    {/* בחירת אגף */}
                    <SelectForm title={'אגף'} select1={'חינוך'} select2={'תרבות'} select3={'רווחה'} select4={'קהילה'}></SelectForm>

                    <TextField type="email" id="email" label="email" variant="outlined" color="secondary"
                        ref={userRef} autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={email} required />


                    {/* -- בחירת תוכנית  */}
                    <SelectPlan></SelectPlan>

                    {/* בחירת קהל יעד */}
                    <SelectForm title={'קהל יעד'} select1={'גיל הרך'} select2={'נוער'} select3={'צעירים'} select4={'מבוגרים'}></SelectForm>

                    <ChooseDate></ChooseDate>

                    <TextErea></TextErea>

                    {/* סכום לניצול */}
                    <TextField type="text" id="AmountUtilize" label="סכום תקציב לפעילות" variant="outlined" color="secondary"
                        ref={userRef}
                        autoComplete='off'
                        onChange={(e) => setUser(e.target.value)}
                        value={name}
                        required
                    />
                    <Button type='submit' variant="contained" color="secondary" onClick={o => o.addUser = { name, pwd }}>להעביר בקשה</Button>

                </form>
            </section>


        </>

    )
}