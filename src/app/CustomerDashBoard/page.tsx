"use client"
import React from 'react'
import CustomAppBar from './Components/CustomAppBar'

import dynamic from 'next/dynamic';
import MainBody from './Components/MainBody';

function page() {
  const [user,setUser]=React.useState()
  React.useEffect(()=>{
    
    setUser(JSON.parse(localStorage.getItem('User')!))
  },[])
  const userData=user?.user?.name
  console.log(userData)
  return (
    <div className='bg-[#fffbf6]'>
      <CustomAppBar />
      <MainBody user={userData} />
    
    </div>
  )
}

export default page
