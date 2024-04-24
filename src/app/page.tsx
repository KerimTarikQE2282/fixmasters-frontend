"use client"
import React, { ChangeEvent, useState } from 'react';
import { connect } from 'react-redux';
import Image from 'next/image';
import { Button, Paper, TextField } from '@mui/material';
import Link from 'next/link';
import { login } from './Actions/auth';
import Logo from './Resources/Logo.png';
import image from './Resources/LoginHandyman.png';

type LoginPageProps={
login:Function
}
function Page({login}:LoginPageProps) {
  const [authDetails, setAuthDetails] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setAuthDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = () => {
    const { email, password } = authDetails;
    // Call the login action with email and password
    login(email, password);
  };
  console.log(authDetails)
const handleSubmit=()=>{
login()
}
  return (
    <div className="bg-orange-100 h-[100vh]">
      <Paper className="flex flex-row justify-evenly w-[90vw] h-[90vh] relative left-[5vw] top-[5vh] rounded-lg" elevation={4}>
        <div className="w-[45vw] h-[50vh] relative top-[20vh] left-[5vw] mb-[5vw]">
          <div className="flex flex-row">
            <Image src={Logo} alt="Logo" className="w-[3vw] h-[6vh] relative bottom-[5vh]" />
            <p className="text-5xl relative bottom-[5vh] ml-[2vw] font-Primary">Fix Masters</p>
          </div>

          <TextField
            label="Email"
            name="email"
            value={authDetails.email}
            onChange={handleChange}
            variant="outlined"
            style={{ width: '20vw' }}
            color="warning"
          />
          <br />
          <TextField
            label="Password"
            name="password"
            value={authDetails.password}
            onChange={handleChange}
            variant="outlined"
            style={{ width: '20vw', marginTop: '5vh' }}
            color="warning"
            type="password"
          />
          <Link href="#" className="underline underline-offset-1 text-orange-300 relative top-[11vh] right-[7vw]">
            Forgot Password?
          </Link>
          <Button
            style={{ width: '20vw', marginTop: '8vh', background: '#f88503' }}
            variant="contained"
            onClick={handleLogin}
          >
            Login
          </Button>
          <p className="relative top-[5vh]">
            Are you new to Fix Masters?
            <Link href="/Registration" className="underline underline-offset-1 text-orange-300 relative left-[1vw]">
              Sign Up
            </Link>
          </p>
        </div>

        <div className="w-[45vw] h-[90vh] bg-orange-200">
          <Image alt="image" src={image} />
        </div>
      </Paper>
    </div>
  );
}

const mapStateToProps = (state:any) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { login })(Page);