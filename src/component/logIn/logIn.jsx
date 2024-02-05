import React from 'react'
import { useRef, useState } from 'react';
// import Admin from '../Admin/admin';
// import User from '../User/user';
import { Button, TextField, Typography, } from '@mui/material';
import UserStore from '../../store/UserStore';
// import Check from './Check';
import CheckLogin from '../Data/CheckLogin';
import { useNavigate } from 'react-router-dom';
import BusinessDetailsStore from '../Data/BusinessDetailsStore';


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
            BusinessDetailsStore.isLogin=true;
            navigate('/admin')
        }
        else {
            navigate('/user')
        }
        setUser('');
        setPwd('');
    }


    return (
        <>
            {
                <section>
                    <h3 className='textWhite' >Sign In</h3>
                    <form onSubmit={handleSubmit}>
                        <TextField type="text" id="userName" label="Name" variant="outlined" color="secondary"
                            ref={userRef} autoComplete='off' onChange={(e) => setUser(e.target.value)} value={name} required />

                        <br /> <br />

                        <TextField type="password" id="password" label="Password" variant="outlined" color="secondary"
                            onChange={(e) => setPwd(e.target.value)} value={pwd} required />
                        <br /> <br />
                        <Button type='submit' variant="contained" color="secondary">Log In</Button>
                    </form>
                </section>
            }

        </>

    )
}