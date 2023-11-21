
import './Cards.css';
import {useState,useEffect} from 'react';
import { Typography,Stack,Box,TextField ,Button,Card ,Container ,Icon ,Rating } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import axios from 'axios';


 const Cards=()=>{
    const [productData,setProductData] = useState([]);
    useEffect (()=>{
        getData();
        
    },[]);

    const getData =async()=>{
        try {
      let response=  await axios.get('https://fakestoreapi.com/products');
            setProductData(response.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    console.log(productData);


    




    return (<div className='main'>
    {
      productData.map((e,i)=>{
        return (
            < >
            <Card sx={{marginBottom:5, margin:5,marginLeft :3,p:3 ,border:0,boxShadow:20 ,borderRadius:10, width:'300px',flexWrap:'wrap',display:'flex',flexDirection:'column'}}>

            <Box >
                <Box sx={{textAlign:'center'}} >

                <Stack sx={{textAlign:'center',justifyItems:'center',marginBottom:2}}>
                    <img   src={e.image} alt="" width={'100%'} height={'200px'} />
                </Stack>
                
                </Box>
                <Box>
                    <Typography>
                        {e.title};
                        <hr />
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        {e.description};
                    </Typography>
                </Box>
                <Box sx={{marginTop:2,textAlign: 'end'}}>
                    <Button sx={{textAlign: 'end'}} variant="contained" color="primary">${e.price}<ShoppingCartOutlinedIcon /></Button>
                </Box>
            </Box>
            </Card>
            </>
        )

      })
    }
  
      


    </div>
  
  )

}
export default Cards;
