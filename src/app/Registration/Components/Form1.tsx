import { Button, Checkbox, FormControlLabel, InputLabel, Radio, RadioGroup, TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import React from 'react'

function Form1( props:any) {
    const [showPassword, setShowPassword] = React.useState<Boolean>(false);
  

    
  
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
   
    
  return (
    <div>
        <p className='font-semibold text-5xl'>Registration</p>
        <TextField label="First name" name='Firstname' value={props.userRegistrationData.Firstname} onChange={props.handleChange} variant="outlined" style={{width:'22.5vw', marginTop:'3vh'}} color="warning" /><br/>
        <TextField label="Middle name" name='Middlename' value={props.userRegistrationData.Middlename} onChange={props.handleChange} variant="outlined" style={{width:'10vw' , marginTop:'2.5vh'}} color="warning" />
        <TextField label="Last Name" name='Lastname' value={props.userRegistrationData.Lastname} onChange={props.handleChange} variant="outlined" style={{width:'10vw' , marginTop:'2.5vh',marginLeft:'5vh'}} color="warning" /> <br/>
        <TextField label="Email"   name='email' value={props.userRegistrationData.email} onChange={props.handleChange} variant="outlined" style={{width:'22.5vw', marginTop:'3vh'}} color="warning" /><br/>
                <TextField
        label="Password"
        variant="outlined"
        name='password' value={props.userRegistrationData.password}
        onChange={props.handleChange}
        style={{ width: '22.5vw', marginTop: '3vh' }}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
            endAdornment: (
            <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
                </IconButton>
            </InputAdornment>
            ),
        }}
        /><br/>
        <TextField
        label=" Confirm Password"
        variant="outlined"
        style={{ width: '22.5vw', marginTop: '3vh' }}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
            endAdornment: (
            <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
                </IconButton>
            </InputAdornment>
            ),
        }}
        /><br/>
<br />     <p  style={{width:'22.5vw', marginTop:'1vh'}}>  what type of account are you signing up for ? </p><br/>
  <RadioGroup value={props.userRegistrationData.userType} name='userType' onChange={props.handleChange}>
  <FormControlLabel value="Handy Man" control={<Radio />} label="Handy Man" />
      <FormControlLabel value="Client" control={<Radio />} label="Client" />
     
    </RadioGroup>


          
        <Button style={{width:'22.5vw', marginTop:'4vh',background:'#f88503'}} variant='contained' onClick={() => props.setWhichForm(2)}>Next </Button>

    </div>
  )
}

export default Form1

