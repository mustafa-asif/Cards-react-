import React, { useState } from 'react'
import { CircularProgress ,Stack,Button,TextField, Typography } from "@mui/material";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged   } from "firebase/auth";
import { auth } from '../config/Firebase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [authData, setAuthData] = useState({});
    console.log(authData);
    const [isLoading, setIsLoading] = useState(false);
    console.log(isLoading);
//  const [isError, setIsError] = useState("");
const navigate=useNavigate();
onAuthStateChanged(auth, (user) => {
    if (user) {
        
      
      const uid = user.uid;
    } else {
      console.log("nouser")
    }
  });

//   const [isLoading, setIsLoading] = useState(false);
  const setIsLoadingHandler=()=>{
        setIsLoading(prev=>!prev);
    }

  const signInHandler = () => {
    setIsLoadingHandler();
    signInWithEmailAndPassword(auth, authData.email, authData.password)
    .then((userCredential) => {
      // Signed in 
    setIsLoadingHandler();
    navigate('/home');

      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      setIsLoadingHandler();
      navigate('/signup')

      const errorCode = error.code;
      const errorMessage = error.message;
    //   setError(errorCode)
    });}


    const loadingHandler=()=>{
        setIsLoading(prev=>!prev);

    }

    const setInputHandler=(e)=>{
        setAuthData(prev=>(
            {
                ...prev,
                [e.target.id]:e.target.value
            }
           
        ))
    }

    const submitHandler= async ()=>{
        loadingHandler()



        try{
            // setIsError("");
             let response =await createUserWithEmailAndPassword(auth,authData.email,authData.password)
            console.log(response.user);
            navigate('/home')
            loadingHandler()
        }
        catch(error){
            console.log({error});
            loadingHandler();
            // setIsError(error.code)
        }
        

    }





  return (
    <Stack justifyContent={'center'} alignItems={'center'} height={'100vh'} bgcolor={"rgb(115,64,193)"}>
        <Stack sx={{
            boxShadow : "0px 10px 10px 0px gray",
            borderRadius: "10px",
            gap:"20px",
            p:10,
            bgcolor:"white"
            
        }}>
            <Stack justifyContent={"center" } alignItems={'center'}  >
                <Typography>
                    Sign Up
                </Typography>
            </Stack>
            <Stack >
                <TextField id="email" onChange={setInputHandler} label={"Email"} placeHolder={"Email..."}/>
            </Stack>
            <Stack>
                <TextField id="password"  onChange={setInputHandler} type='password' label={"Password"} placeHolder={"Password..."}/>
            </Stack>
        {/* {isError.length? isError:''} */}
        <Stack>
        <Button variant='contained'  sx={{
        background: 'rgb(91,152,217,0.7)',
        background: 'linear-gradient(124deg, rgba(91,152,217,0.7) 27%, rgba(155,212,134,0.7) 100%)',
        my:2
                }}
                onClick={signInHandler}>
                    {isLoading?<CircularProgress sx={{color:'white'}}/>:'Login'}
                </Button>


                <Button variant='contained'  sx={{
                  background: 'rgb(91,152,217,0.7)',
                  background: 'linear-gradient(124deg, rgba(91,152,217,0.7) 27%, rgba(155,212,134,0.7) 100%)'
                }}
                onClick={submitHandler}>

                  {isLoading?<CircularProgress sx={{color:'white'}}/>:'signup'}
                </Button>
            </Stack>

        </Stack>


    </Stack>
    
    
  )
}

export default SignUp