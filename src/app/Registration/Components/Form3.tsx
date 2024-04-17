import { Button, TextField } from '@mui/material'
import React from 'react'

function Form3(props:any) {
  
  return (
    <div>
        <p className='font-semibold text-5xl'>Registration</p>
        <p className='relative top-[2.5vh]'>What kind of account are you signing up for ?</p>
        
        <TextField label="PhoneNumber" name='PhoneNumber' onChange={props.handleChange}  value={props.userRegistrationData.PhoneNumber} variant="outlined" style={{width:'22.5vw', marginTop:'3vh'}} color="warning" /><br/>
        <TextField label="DateoFBirth" name='DateoFBirth' type='date' onChange={props.handleChange}  value={props.userRegistrationData.DateoFBirth} variant="outlined" style={{width:'22.5vw', marginTop:'3vh'}} color="warning" /><br/>
        <input type='file'  style={{  marginTop: '3vh' }}  value={props.usereImage}/><br/>

        <Button style={{width:'22.5vw', marginTop:'4vh',background:'#f88503'}} variant='contained' onClick={() => props.setWhichForm(1)}>Previous</Button><br/>
        <Button style={{width:'22.5vw', marginTop:'2vh',background:'#183c27'}} variant='contained' onClick={() => props.handleSubmit()} >Done</Button>

    </div>
  )
}

export default Form3

// this is only this added here QualificationImage which makes it unique
// PhoneNumber
// DateoFBirth
// UsereImage