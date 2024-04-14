import { Button, TextField } from '@mui/material'
import React from 'react'

function Form2() {
  return (
    <div>
        <p className='font-semibold text-5xl'>Registration</p>
        <TextField label="Frist name" variant="outlined" style={{width:'10vw' , marginTop:'5vh'}} color="warning" />
        <TextField label="Last Name" variant="outlined" style={{width:'10vw' , marginTop:'5vh',marginLeft:'5vh'}} color="warning" /> <br/>
        <TextField label="Email" variant="outlined" style={{width:'22.5vw', marginTop:'3vh'}} color="warning" /><br/>
        <TextField label="Password" variant="outlined" style={{width:'22.5vw', marginTop:'3vh'}} color="warning" /><br/>
        <TextField label="Confirm Password" variant="outlined" style={{width:'22.5vw', marginTop:'3vh'}} color="warning" /><br/>
        <Button style={{width:'22.5vw', marginTop:'4vh',background:'#f88503'}} variant='contained'>Next</Button>

    </div>
  )
}

export default Form2

