import axios from 'axios';

import {
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL,
    USER_CREATE_AUTH_SUCCESS,
    USER_CREATE_AUTH_FAIL


} from './types'





// export const AddEmployeeAuthentication = (email,password,re_password) => async (dispatch) => {
    
//       const config = {
//         headers: {
//             'Content-Type': 'application/json'
            
//         }
//     }; 
//     // console.log(postImage.employee_image);
  
//     // const formData = new FormData();
//     // formData.append('First_name',newEmployee.First_name);
//     // formData.append('Middle_name',newEmployee.Middle_name);
//     // formData.append('Last_name',newEmployee.Last_name);
//     // formData.append('email',newEmployee.email);
//     // formData.append('phoneNumber',newEmployee.phoneNumber);
//     // formData.append('employed',newEmployee.employed);
//     // formData.append('title',newEmployee.title);
//     // formData.append('department',newEmployee.department);
//     // formData.append('salary',newEmployee.salary);
//     // formData.append('password',newEmployee.password);
//     // formData.append('re_password',newEmployee.re_password);
//     // formData.append('employee_image',postImage.employee_image[0]); 
    

//     const body=JSON.stringify({email,password,re_password})
  
//     try {
//       const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`,body,config);
  
//       dispatch({
//         type: USER_CREATE_AUTH_SUCCESS,
       
//       });
//     } catch (err) {
//       console.log(err);
//       dispatch({
//         type: USER_CREATE_AUTH_FAIL,
//       });
//     }
//   };
export const RegisterUser=(user)=>async dispatch=>{
    console.log( 'from action', user)
 const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
}; 

if(user.userType='Client'){
const formData = new FormData();
     formData.append('Firstname',user.Firstname);
     formData.append('Middlename',user.Middlename);
     formData.append('Lastname',user.Lastname);
     formData.append('email',user.email);
     formData.append('DateoFBirth',user.DateoFBirth);
     formData.append('password',user.password);  
     formData.append('PhoneNumber',user.PhoneNumber);
     formData.append('UserImage',user.PropfilePicture);
     formData.append('userType',user.userType);
     
   try{
     
      const res=await axios.post('http://localhost:3001/api/v1/CustomerAuth/RegisterCustomer',formData,config)
     
      dispatch({
        type: USER_CREATE_SUCCESS,
        payload:res.data
      })
     }
     catch(err){
      dispatch({
        type: USER_CREATE_FAIL,
      })
      console.log('registrations error',err)
     }
}
   else if(user.userType='Handy Man'){
    const formData = new FormData();
    formData.append('Firstname',user.Firstname);
    formData.append('Middlename',user.Middlename);
    formData.append('Lastname',user.Lastname);
    formData.append('email',user.email);
    formData.append('DateoFBirth',user.DateoFBirth);
    formData.append('password',user.password);
    formData.append('userType',user.userType);
    formData.append('PropfilePicture',user.PropfilePicture);
    formData.append('ProficiencyDocuments',user.ProficiencyDocuments);
    try{
    
     const res=await axios.post('http://127.0.0.1:8000/api/Employee-create/',formData,config)
    
     dispatch({
       type: USER_CREATE_SUCCESS,
       payload:res.data
     })
    }
    catch(err){
     dispatch({
       type: USER_CREATE_FAIL,
     })
     console.log('registrations error',err)
    }
   }


  }
