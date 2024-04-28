import { Paper } from '@mui/material'
import React from 'react'

function AlltimeJobs() {
  return (
    <Paper style={{
        width: '70vw',height: '70vh',position: 'relative',top: '5vh' , left: '4.5vw',overflow:'auto'}}>
        <p className='font-semibold text-2xl relative top-[3vh] left-[4.8vw] w-[20vw]'>My Posting</p>
        <div className='bg-[#fffbf6] h-[20vh] w-[60vw] mt-[10vh] '>
            <p className='font-semibold text-2xl relative top-[3vh] ml-[4.8vw] w-[20vw]'>Job Name </p>
            <p className=' relative top-[5vh] left-[4.8vw] w-[20vw]'>Hourly or relgular</p>
            <p className=' relative top-[8vh] left-[4.8vw] w-[20vw]'>Job Createion Date </p>
            <div className='relative left-[30vw] flex flex-row justify-evenly w-[20vw] bottom-11 '>
            <p>Proposals </p>
            <p>Messages </p>
            <p>Hire </p>
            </div>
            <div className='relative left-[30vw] flex flex-row justify-evenly w-[20vw] bottom-5'>
            <p>0 </p>
            <p>0 </p>
            <p>0 </p>
            </div>
            
        </div>
       
        
        

      
    </Paper>
  )
}

export default AlltimeJobs
