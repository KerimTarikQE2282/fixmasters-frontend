import { Button, InputLabel, TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import React from 'react'

function Form1( props:any) {
    const [showPassword, setShowPassword] = React.useState(false);
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
     <input type='file'  style={{  marginTop: '3vh' }}  value={props.usereImage}/><br/>
     <p  style={{width:'22.5vw', marginTop:'1vh'}}>  what type of account are you signing up for ? </p><br/>
        <Button style={{width:'22.5vw', marginTop:'1vh',background:'#298100'}} variant='contained' onClick={() => props.setWhichForm(2)}>Client</Button><br/>
        <Button style={{width:'22.5vw', marginTop:'4vh',background:'#f88503'}} variant='contained' onClick={() => props.setWhichForm(3)}>Handy Man</Button>

    </div>
  )
}

export default Form1

