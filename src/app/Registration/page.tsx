"use client"
import React from 'react'
import image from '../Resources/LoginHandyman.png'
import Image from 'next/image'
import { Paper } from '@mui/material'
import Form1 from './Components/Form1'
import Form2 from './Components/Form2'
import Form3 from './Components/Form3'


function page() {
  const [whichForm,setWhichForm]=React.useState(1)
  const [userRegistrationData,setUserRegistrationData]=React.useState(
    {
      Firstname: '',
      Middlename: '',
      Lastname: '',
      email: '',
      activated: false,
      HomeLocation: '',
      PhoneNumber: '',
      DateoFBirth: '',
      password: ''
    }
  )
  const [usereImage,setUserImage]=React.useState()
  const [qualificationImage,setQualificationImage]=React.useState(null)
  const handleChange = (e) => {
    setUserRegistrationData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const handleSubmit = () => {
    console.log(userRegistrationData)
  }
  return (
    <div className='bg-orange-100 h-[100vh] '>
    <Paper className='flex flex-row  justify-evenly w-[90vw] h-[90vh] relative left-[5vw] top-[5vh] rounded-lg' elevation={4}>
    <div className=' w-[45vw] h-[90vh] bg-orange-200'>
       
       <Image alt="image" src={image}/>
      
      </div>
      <div className={`w-[45vw] h-[50vh] ${whichForm === 1 ? 'block' : 'hidden'} relative top-[10vh] left-[5vw] mb-[5vw]`} >  
        <Form1 setWhichForm={setWhichForm} userRegistrationData={userRegistrationData} handleChange={handleChange} setUserRegistrationData={setUserRegistrationData} usereImage={usereImage} setUserImage={setUserImage} />
        </div >
        <div className= {`w-[45vw] h-[50vh] ${whichForm === 2 ? 'block' : 'hidden'}  relative top-[20vh] left-[5vw] mb-[5vw] `}>
        <Form2 setWhichForm={setWhichForm} userRegistrationData={userRegistrationData} handleChange={handleChange} setUserRegistrationData={setUserRegistrationData} usereImage={usereImage} setUserImage={setUserImage} handleSubmit={handleSubmit}/>
      </div >
      <div className= {`w-[45vw] h-[50vh] ${whichForm === 3 ? 'block' : 'hidden'}  relative top-[20vh] left-[5vw] mb-[5vw] `}>
        <Form3 setWhichForm={setWhichForm} userRegistrationData={userRegistrationData} handleChange={handleChange} setUserRegistrationData={setUserRegistrationData} usereImage={usereImage} setUserImage={setUserImage} qualificationImage={qualificationImage} setQualificationImage={setQualificationImage} handleSubmit={handleSubmit}/>
      </div >

      
    </Paper>
    </div>
  )
}

export default page
