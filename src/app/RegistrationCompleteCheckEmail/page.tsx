"use client"
import { Button, Paper } from '@mui/material'
import React from 'react'
 import checkImage from '../Resources/orangetick.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
function page() {
  //TODO add Image to the other side
  const router = useRouter();
  const GoHome=()=>{
 
      router.push('/');
    
  }
  return (
    <div className='bg-orange-500 h-[100vh] w-[100vw]' >
     <Paper style={{height:'90vh',width:'90vw', position:'absolute',top:'5vh',left:'5vw', display:'flex', flexDirection:'row'}} elevation={4}>
      <div className=' w-[50%]'>
   
      </div>
      <div className=' w-[50%]'>
        <p className='text-2xl font-bold relative top-[20vh] left-[5vw]'>
          Verify your email Adress
        </p> <br/>
        <p className='t relative top-[18vh] left-[5vw] w-[20vw]'>
          to start using fix masters please confirm your email adress with the email weve sent you , thank you 
        </p>
        <Image src={checkImage} alt='check image' className='relative top-[25vh] left-[10vw]'/>
        <Button style={{position:'relative',top:'35vh',left:'14vw',background:'orange'}} onClick={GoHome} variant='contained'>Home</Button>
      </div>

     </Paper>
    </div>
  )
}

export default page
