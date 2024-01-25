import React from 'react'
import { useRef, useState, useEffect } from 'react';
// import Admin from '../Admin/admin';
// import User from '../User/user';
import { Button, TextField, Typography, } from '@mui/material';
import UserStore from '../../store/UserStore';
import Check from './check';
export default function LogIn() {

    const userRef = useRef();
    const errRef = useRef();

    const [name, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(0);

    useEffect(() => {
        userRef.current.focus();
    }, [])
    useEffect(() => {
        setErrMsg('');
    }, [name, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, pwd);
        // setSuccess(UserStore.addUser=());


        setSuccess(UserStore.chackUser={ name, pwd });
        // setSuccess(UserStore.chackUser={ name, pwd });
        console.log(success);
        setUser('');
        setPwd('');
        
    }


    return (
        <>
         {success===1?<User></User>:success===2?<Admin></Admin>:
            <section>
                {/* (הרשאת עובד)הרשמה כמשתמש חדש*/}
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>

                    <TextField type="text" id="userName" label="Name" variant="outlined" color="secondary"
                        ref={userRef}
                        autoComplete='off'
                        onChange={(e) => setUser(e.target.value)}
                        value={name}
                        required
                    />
                    <br />
                    <br />
                    <TextField type="password" id="password" label="Password" variant="outlined" color="secondary"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required />
                    <br />
                    <br />
                    <Button type='submit' variant="contained" color="secondary" onClick={o=>o.addUser={name,pwd}}>Log In</Button>

                    {/* <input type='submit'></input> */}
                </form>
            </section>
        }

        </>

    )
}