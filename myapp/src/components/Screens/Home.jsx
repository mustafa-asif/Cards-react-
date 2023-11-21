import React from 'react'
import { Typography,Stack,Box, Grid,Button  ,Icon ,Rating } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Cards from '../Cards/Cards';
import Navbar from '../Navbar/Navbar';


const Home = () => {

    return(
        <>
        <Navbar />
        <Cards/>

        
        </>
    )
   


    
}
    


export default Home;