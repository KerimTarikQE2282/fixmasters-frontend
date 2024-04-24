"use client"
import React, { ChangeEvent } from 'react'
import image from '../Resources/LoginHandyman.png'
import Image from 'next/image'
import { Paper } from '@mui/material'
import Form1 from './Components/Form1'
import Form2 from './Components/Form2'
import { connect } from 'react-redux';
import { RegisterUser } from '../Actions/Registration';

type RegistrationPageProps={
  RegisterUser:Function
}
function page({ RegisterUser}:RegistrationPageProps) {
  const [whichForm,setWhichForm]=React.useState(1)
  const [userRegistrationData,setUserRegistrationData]=React.useState(
    {
      Firstname: '',
      Middlename: '',
      Lastname: '',
      email: '',
      HomeLocation: '',
      PhoneNumber: '',
      DateoFBirth: '',
      password: '',
      userType:'',
      
    }
  )

  const [ProficiencyDocuments,setProficiencyDocuments]=React.useState<File | null>(null)
  const [PropfilePicture,setPropfilePicture]=React.useState<File>()
  const handleChange = (e:ChangeEvent<any>) => {
    if(e.target.name !='userType'){
      setUserRegistrationData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    else{
      setUserRegistrationData((prev) => ({
        ...prev,
        userType: e.target.value
      }));
    }
   
  };
 const setUserImage=(file:File)=>{
  setPropfilePicture(file)
}
 const setqualificationImage=(file:File)=>{
  setProficiencyDocuments(file)
 }
//  console.log(userRegistrationData,PropfilePicture,qualificationImage)
 const user={
  ...userRegistrationData,
  PropfilePicture,
  ProficiencyDocuments
 }
 console.log(user)
  const handleSubmit = () => {
    console.log(user)
    RegisterUser(user)
  }
  return (
    <div className='bg-orange-100 h-[100vh] '>
    <Paper className='flex flex-row  justify-evenly w-[90vw] h-[90vh] relative left-[5vw] top-[5vh] rounded-lg' elevation={4}>
    <div className=' w-[45vw] h-[90vh] bg-orange-200'>
       
       <Image alt="image" src={image}/>
      
      </div>
      <div className={`w-[45vw] h-[50vh] ${whichForm === 1 ? 'block' : 'hidden'} relative top-[10vh] left-[5vw] mb-[5vw]`} >  
        <Form1 setWhichForm={setWhichForm} userRegistrationData={userRegistrationData} handleChange={handleChange} setUserRegistrationData={setUserRegistrationData}  />
        </div >
        <div className= {`w-[45vw] h-[50vh] ${whichForm === 2 ? 'block' : 'hidden'}  relative top-[20vh] left-[5vw] mb-[5vw] `}>
        <Form2 setWhichForm={setWhichForm} userRegistrationData={userRegistrationData} handleChange={handleChange} setUserRegistrationData={setUserRegistrationData} setUserImage={setUserImage} setqualificationImage={setqualificationImage} handleSubmit={handleSubmit}/>
      </div >
      

      
    </Paper>
    </div>
  )
}
const mapStateToProps = (state:any) => ({

});

export default connect(mapStateToProps, { RegisterUser })(page)

