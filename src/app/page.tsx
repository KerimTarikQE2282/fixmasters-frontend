"use client"
import React from 'react'
import image from './Resources/LoginHandyman.png'
import Image from 'next/image'
import Logo from './Resources/Logo.png'
import { Button, Input, Paper, TextField } from '@mui/material'
import Link from 'next/link'
function page() {
  return (
    <div className='bg-orange-100 h-[100vh] '>
    <Paper className='flex flex-row  justify-evenly w-[90vw] h-[90vh] relative left-[5vw] top-[5vh] rounded-lg' elevation={4}>
      <div className=' w-[45vw] h-[50vh] relative top-[20vh] left-[5vw] mb-[5vw] '>

       <div className='flex flex-row ' >
        <Image src={Logo} alt='Logo'  className='w-[3vw] h-[6vh] relative bottom-[5vh]'/>
        <p className='text-5xl  relative bottom-[5vh] ml-[2vw] font-Primary'>Fix Masters</p>
       </div>
       
       <TextField label="Email" variant="outlined" style={{width:'20vw'}} color="warning" />
       <br></br>
       <TextField label="Password" variant="outlined" style={{width:'20vw', marginTop:'5vh'}}color="warning" />
        <Link href={'#'} className='underline underline-offset-1 text-orange-300 relative top-[11vh] right-[7vw]'>Frogot Password?</Link>
        <Button style={{width:'20vw', marginTop:'8vh',background:'#f88503'}} variant='contained'>Login</Button>
        <p className='relative top-[5vh]'>Are you new to Fix Masters?<Link href={'/Registration'} className='underline underline-offset-1 text-orange-300 relative left-[1vw]'>Sign Up</Link></p>
      </div >

      <div className=' w-[45vw] h-[90vh] bg-orange-200'>
       
       <Image alt="image" src={image}/>
      
      </div>
      
    </Paper>
    </div>
  )
}

export default page
