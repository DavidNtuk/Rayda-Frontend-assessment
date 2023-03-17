import * as React from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import CardItem from './CardItem';
import IconButton from '@mui/material/Button';
import './Styling/Card.css'



const Card = () => {

   return(
        <Box sx={{ border: 1, borderColor: 'divider', margin:'0px 32px', borderRadius: '15px', height:'auto',width:'auto', padding:'24px', boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)', marginTop:'50px'}}>
            <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{borderBottom: 1,borderColor: 'divider'}} >
                <Grid item>
                    <Typography sx={{ flex: 1, fontWeigh:'600', fontSize:'18px', lineHeight:'24px',mb:'20px'}}
                    >
                    Featured item
                    </Typography>
                </Grid>
                <Grid item>
                    <Button  variant='outlined' size='small' sx={{fontSize:'12px', fontWeight:'600', color:'#344054', border: '1px solid #D0D5DD',mb:'20px'}} >View Auction</Button>
                </Grid>
            </Grid>   
            <CardItem />         
        </Box>
   )
}

export default Card