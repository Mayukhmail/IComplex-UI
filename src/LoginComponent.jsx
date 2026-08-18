import React, { useEffect, useState } from 'react'
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { motion, AnimatePresence } from "framer-motion"
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save'
import Box from '@mui/material/Box'
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUserData } from "./userSlice";

function LoginComponent() {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  //Image Bg
  const images = ['loginBg.jpg', 'loginBg2.jpg', 'loginBg3.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImgs = 3;
  
  //Password show/hide methods
  const outlinedPasswordId = React.useId();
  const [showPassword, setShowPassword] = React.useState(false);
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  //Bg Img change timer
  useEffect(()=>{
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        (currentIndex+1) % images.length
    );
  }, 5000);
  return () => clearInterval(intervalId);
}, [images.length])


let isToggled = false; //Setting inital Toggle
if(localStorage.getItem("visible") == "true"){
  isToggled = true;
}
else{
  isToggled = false;
}
const [isVisible, setIsVisible] = useState(isToggled)
const toggleIcon = function(){
  setIsVisible(!isVisible)
  localStorage.setItem("visible", !isVisible);
}

// console.log(isToggled);


let initialUserName = 'Admin'; //Setting initial username
if(localStorage.getItem("username")){
  initialUserName = localStorage.getItem("username");
}
else{
  initialUserName = 'Admin';
}



const [userName, setUserName] = useState(initialUserName)


const handleChangeUserName = function (e){
  setUserName(e.target.value);
}

const [password, setPassword] = useState("")


const [loading, setLoading] = useState(false)
const navigate = useNavigate();

const dispatch = useDispatch();
const submitLogin = async function(){
  if(isVisible == true){
    localStorage.setItem("username",userName);
  }
  if(localStorage.getItem("visible") == "false"){
    localStorage.clear();
  }
  setLoading(!loading);

  try {
    const response = await fetch(`${BASE_URL}Login/Validation`,{
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({userName, password})
    });

    const data = await response.json();
    const userRoleData = data.data.userrole;
    dispatch(setUserData(userRoleData));


    if(data.status == "Success"){
      navigate('/dashboard');
      sessionStorage.setItem("email", data.data.email);
      sessionStorage.setItem("fullname", data.data.fullname);
      sessionStorage.setItem("mobile", data.data.mobile);
    }else{
      alert(data.error || "Invalid username or password");
      setLoading(loading);
      setPassword("");
    }
  } catch(error){
    console.error("Login error", error);
    alert("Something went wrong. Please try again.");
  }
};



  return (
    <div className=''>
      <div className='flex w-full h-screen'>
        <div className='flex-1 relative'>
          <AnimatePresence>
            <motion.img
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt="carousel"
              style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
          {/* <img className='object-cover h-full' src={images[currentIndex]} alt="" /> */}
          <div className='h-full bg-linear-to-b from-transparent to-black/80 absolute inset-0'></div>
          <div className='absolute lg:bottom-50 lg:left-10 xl:bottom-50 xl:left-30 2xl:bottom-50 2xl:left-50 text-white'>
            <h1 className='text-4xl mb-4'>Find your sweet home</h1>
            <p className='text-sm w-sm mb-4'>Ea consequat cupidatat elit tempor ad cillum excepteur nulla aliquip ullamco.</p>
            <div className='absolute flex gap-3'>
              {images.map((item, index)=>
                <div key={index} className={index === currentIndex ? 'w-8 h-2 bg-white rounded-full' : "w-2 h-2 bg-white rounded-full"}>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='flex flex-1 justify-center items-center w-1/2'>
        <div className='lg:p-8'>
          <div className='mb-8'>
            <h1 className='lg:text-4xl xl:text-5xl 2xl:text-6xl text-slate-900 font-bold mb-4'>iComplex</h1>
            <p className='lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold'>User Login</p>
          </div>
          <div className='flex flex-col lg:gap-4 xl:gap-5 2xl:gap-7'>
            {/* <Box sx={{ maxWidth: '100%' }}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Complex ID"
                defaultValue="CMPL-JVR-99087"
              />
            </Box> */}
              <TextField
                required
                id="outlined-required"
                label="User Name"
                value={userName}
                onChange={handleChangeUserName}
              />
              
              <FormControl variant="outlined">
              <InputLabel htmlFor={`${outlinedPasswordId}-input`}>Password</InputLabel>
              <OutlinedInput
                id={`${outlinedPasswordId}-input`}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? 'hide the password' : 'display the password'
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              </FormControl>
              {/* <TextField
                id=""
                select
                label="FY Period"
                defaultValue="EUR"
                helperText="Please select your FY Period"
              >
                {fyYear.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField> */}
              <div className='flex items-center gap-2 flex-row-reverse'>
                {!isVisible && <ToggleOffIcon fontSize='large' cursor='pointer' color='action' onClick={toggleIcon}/>}
                {isVisible && <ToggleOnIcon fontSize='large' cursor='pointer' color='primary' onClick={toggleIcon}/>}
                <p>Remember me?</p>
              </div>
              {!loading && <Button fullWidth variant="contained" onClick={submitLogin}>Login</Button>}
              {loading && <Button
                fullWidth
                loading
                loadingPosition="end"
                endIcon={<SaveIcon />}
                variant="outlined"
              >
                please wait
              </Button>}
              <div className='text-center'>
                <p className='text-xs mb-2'>Contact Us - 9830303181 | Mail Us - mayukhmail@gmail.com</p>
                <p className='text-xs'>Version (2026.05:004.009)</p>
              </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent