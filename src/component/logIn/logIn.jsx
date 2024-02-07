import React from 'react'
import { useRef, useState } from 'react';
import { Button, TextField } from '@mui/material';
import CheckLogin from '../Data/CheckLogin';
import { useNavigate } from 'react-router-dom';
import BusinessDetailsStore from '../Data/BusinessDetailsStore';
import './LogIn.css'

export default function LogIn() {

    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();
    const [name, setUser] = useState('');
    const [pwd, setPwd] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, pwd);
        const resLogIn = await CheckLogin(name, pwd);

        if (resLogIn === 1) {
            BusinessDetailsStore.isLogin = true;
            navigate('/admin')
        }
        else if (resLogIn === 2) {
            navigate('/user')
        }
        else {
            navigate('/');
            alert("שם משתמש וסיסמא אינם רשומים במערכת")
        }
        setUser('');
        setPwd('');
    }


    return (
        <>
            {
                <section >
                    <h3 className='textWhite' >Sign In</h3>
                    <form onSubmit={handleSubmit}>
                        <TextField type="text" id="userName" label="Name" variant="outlined" color="secondary"
                            ref={userRef} autoComplete='off' onChange={(e) => setUser(e.target.value)} value={name} required 
                            inputProps={{ style: { color: 'white' }, }} />
                                                          

                        <br /> <br />

                        <TextField type="password" id="password" label="Password" variant="outlined" color="secondary"
                            onChange={(e) => setPwd(e.target.value)} value={pwd} required 
                            inputProps={{ style: { color: 'white' }, }} />
                        <br /> <br />
                        <Button type='submit' variant="contained" color="secondary">Log In</Button>
                    </form>
                </section>
            }

        </>

    )
}