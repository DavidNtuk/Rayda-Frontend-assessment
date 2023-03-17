import * as React from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import CardItem from './CardItem';
import IconButton from '@mui/material/Button';



const Card = () => {

   return(
        <Box sx={{ border: 1, borderColor: 'divider', margin:'15px 32px', borderRadius: '15px', height:'899px',padding:'24px', boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)', marginTop:'50px'}}>
            <Grid container sx={{borderBottom: 1,borderColor: 'divider'}} >
                <Grid item md={10.7}>
                    <Typography
                        component="div"
                        variant="h5"
                        color="inherit"
                        align="left"
                        noWrap
                        sx={{ flex: 1, fontWeigh:'600', fontSize:'18px', lineHeight:'24px', mb:'20px' }}
                        >
                        Featured item
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton sx={{marginLeft:'auto', mb:'20px'}} >
                        <Button  variant='outlined' size='small' sx={{fontSize:'12px', fontWeight:'600', color:'#344054', border: '1px solid #D0D5DD'}} >View Auction</Button>
                    </IconButton>
                </Grid>
            </Grid>   
            <CardItem />         
        </Box>
   )
}

export default Card