import { Button, TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import React from 'react'

function Form1() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
  return (
    <div>
        <p className='font-semibold text-5xl'>Registration</p>
        <TextField label="Frist name" variant="outlined" style={{width:'10vw' , marginTop:'5vh'}} color="warning" />
        <TextField label="Last Name" variant="outlined" style={{width:'10vw' , marginTop:'5vh',marginLeft:'5vh'}} color="warning" /> <br/>
        <TextField label="Email" variant="outlined" style={{width:'22.5vw', marginTop:'3vh'}} color="warning" /><br/>
                <TextField
        label="Password"
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
        <TextField
        label="Password"
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
        <Button style={{width:'22.5vw', marginTop:'4vh',background:'#f88503'}} variant='contained'>Next</Button>

    </div>
  )
}

export default Form1

