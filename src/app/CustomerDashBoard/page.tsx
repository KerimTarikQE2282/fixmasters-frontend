"use client"
import React from 'react'
import CustomAppBar from './Components/CustomAppBar'
import { useSelector } from 'react-redux';
type redux_User_State = {
  auth:{
    user: {
    name: {
      UserImage: string;
      activated: boolean;
      _id: string;
      Firstname: string;
      Middlename: string;
      Lastname: string;
      email: string;
      PhoneNumber: string;
      HomeLocation: string;
      DateoFBirth: string;
      password: string;
      userType: string;
    };
  };
  accessToken: {
    accessToken: string;
  };
  refreshToken: {
    refreshToken: string;
  };
}
};
function page() {
  const user = localStorage.getItem('FixMasters-User');
console.log('from main body', JSON.parse(user));
  return (
    <div>
      <CustomAppBar/>
     
      
    </div>
  )
}

export default page
