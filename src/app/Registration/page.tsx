"use client"
import React from 'react'
import image from '../Resources/LoginHandyman.png'
import Image from 'next/image'
import { Paper } from '@mui/material'
import Form1 from './Components/Form1'


function page() {
  return (
    <div className='bg-orange-100 h-[100vh] '>
    <Paper className='flex flex-row  justify-evenly w-[90vw] h-[90vh] relative left-[5vw] top-[5vh] rounded-lg' elevation={4}>
    <div className=' w-[45vw] h-[90vh] bg-orange-200'>
       
       <Image alt="image" src={image}/>
      
      </div>
      <div className=' w-[45vw] h-[50vh] relative top-[20vh] left-[5vw] mb-[5vw] '>
    <Form1/>
    </div >

   
      
    </Paper>
    </div>
  )
}

export default page
