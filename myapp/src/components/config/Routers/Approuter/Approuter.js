import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import routeList from '../routeList';
import { Stack } from '@mui/material';



const Approuter = () => {
    




  return ( <Stack>

    <Router>
        <Routes>{
            routeList.map((e,i)=> <Route path={e.path} element={e.element} />)
            
        }
                 
            
         </Routes>




     </Router>
        </Stack>
    
    
  )
}

export default Approuter