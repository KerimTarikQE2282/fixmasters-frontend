import { Button, Paper } from '@mui/material'
import { relative } from 'path'
import React from 'react'
import AlltimeJobs from './AlltimeJobs'
import CustomerDashBoardSidePaper from './CustomerDashBoardSidePaper';

type UserData = {
  DateOfBirth: string;
  Firstname: string;
  HomeLocation: string;
  Lastname: string;
  Middlename: string;
  PhoneNumber: string;
  UserImage: string;
  activated: boolean;
  email: string;
  password: string;
  userType: string;
  _id: string;
};


function MainBody(props:UserData) {
  console.log(props)
  return (
    <div className='relative top-10 w-[70vw] h-[90vh] bg-[#fffbf6]'>
      <div className='flex flex-col'>
    <p className='relative top-[5vh] left-[5vw] font-semibold text-4xl'>Welcome {props?.Firstname}</p>
    <Button style={{position:'relative',bottom:'2vh',left:'70vw',width:'10vw', color:'white',background:'orange'}} variant='contained'>Post A Job</Button>
    <Button style={{position:'relative',bottom:'6vh',left:'82.5vw',width:'15vw', color:'white',background:'orange'}} variant='contained'>Choose A handy man for a Job</Button>
    </div>
    <div  className='flex flex-row'>
    <AlltimeJobs  />
    <CustomerDashBoardSidePaper/>
    </div>
    </div>
  )
}

export default MainBody
