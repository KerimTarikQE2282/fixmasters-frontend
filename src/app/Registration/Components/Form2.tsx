import { Button, TextField } from '@mui/material'

import React from 'react'
import { connect, useSelector } from 'react-redux';
import { RegisterUser } from '../../Actions/Registration';
import { useRouter } from 'next/navigation';

type Form1Props={
  setWhichForm:Function,
  userRegistrationData:{
      Firstname: string,
    Middlename: string
    Lastname: string
    email: string
    HomeLocation: string,
    PhoneNumber: string,
    DateoFBirth: string,
    password: string,
    userType:string,
  },
  handleChange:any | null,
  setUserRegistrationData:Function
}
type Reduxstate={
  Registrations:{
    customer: {
      Id: string,
      Name: string,
    },
    token: string,
    refreshToken: string,
  }
}
function Form2(props:any) {
  const myUser=useSelector((state:Reduxstate)=>state.Registrations)
  const router = useRouter();
  const [type,setType]=React.useState<String>('client')
  const [file,setFile]=React.useState<File|null >()
  const [qualificationDocuments,setqualificationDocuments]=React.useState<FileList|null>()
  props.setUserImage(file)
  props.setqualificationImage(qualificationDocuments)
  if (myUser.customer.Id) {
    router.push('/RegistrationCompleteCheckEmail');
  }
  return (
    <div>
        <p className='font-semibold text-5xl'>Registration</p>
        <p className='relative top-[2.5vh]'>What kind of account are you signing up for ?</p>
        <label htmlFor="profile-picture" >Profile Picture</label>
          <input
          type='file'
          name='file'
          onChange={(e)=>setFile(e?.target?.files && e.target.files[0])}
          className='mt-[4vh] '
        
            /><br/>
                  {props.userRegistrationData.userType === "Handy Man" && (
          <div>
            <label htmlFor="profile-picture">Documents of proficiency</label>
            <input
              type="file"
              name="file"
              onChange={(e) => setqualificationDocuments(e?.target?.files)}
              className="mt-[4vh]"
              multiple
            /><br/>
          </div>
        )}
        <TextField label="PhoneNumber" name='PhoneNumber' onChange={props.handleChange}  value={props.userRegistrationData.PhoneNumber} variant="outlined" style={{width:'22.5vw', marginTop:'3vh'}} color="warning" /><br/>
        <TextField label="DateoFBirth" name='DateoFBirth' type='date' onChange={props.handleChange}  value={props.userRegistrationData.DateoFBirth} variant="outlined" style={{width:'22.5vw', marginTop:'3vh'}} color="warning" /><br/>
        <Button style={{width:'22.5vw', marginTop:'4vh',background:'#f88503'}} variant='contained' onClick={() => props.setWhichForm(1)}>Previous</Button><br/>
        <Button  style={{width:'22.5vw', marginTop:'2vh',background:'#183c27'}} variant='contained'  onClick={() => props.handleSubmit() }>Done</Button>

    </div>
  )
}
const mapStateToProps = (state:any) => ({

});

export default connect(mapStateToProps, { RegisterUser })(Form2)

// PhoneNumber
// DateoFBirth
