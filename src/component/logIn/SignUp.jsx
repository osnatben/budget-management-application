import React from 'react'

export default function SignUp() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        AddUser(name, pwd);
      
        setUser('');
        setPwd('');

    }

    return (
        <>
            <div>
                <h3>Sign Un</h3>
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
                    <Button type='submit' variant="contained" color="secondary">Sign Up</Button>
                </form>
            </div>

        </>
    )
}
