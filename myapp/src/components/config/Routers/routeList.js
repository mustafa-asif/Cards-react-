import React from 'react'
import SignUp from '../../Screens/SignUp';
import Home from '../../Screens/Home';
import Error from '../../Screens/Error';



    const routeList =[
        {
            path: "/signup",
            element: <SignUp /> 
        },
        {
            path: "/home",
            element:<Home/>
        },
        {
            path: "*",
            element:<Error/>
        },
       
      
    
    ];
 


export default routeList;