import * as React from 'react';
import { Button, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import content from '../img/Content.png'
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import "../App.css"



const Showcase = () => {

   return(
        <Box sx={{ border: 1, borderColor: 'divider', margin:'15px 32px', borderRadius: '15px', height:'auto',padding:'24px', boxShadow:' 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)', marginTop:'50px'}}>
            <Paper className='auction_paper' sx={{borderRadius:'15px'}}>
                <div className='content'>
                    {<img src={content} alt="content" sx={{boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)'}} />}
                </div>
            </Paper>
            <Grid container position='row' alignItems='center' className='auction_card_grid' sx={{ padding:'10px'}}>
                <Grid item md={2} lg={2} sm={4}></Grid>
                <Grid item md={8} lg={8} sm={8}>
                    <Typography color="inherit" sx={{fontSize:'24px', fontWeight:'600',lineHeight:'32px',}} >
                        Starts in : 3days : 2hours : 24minutes
                    </Typography>
                    <div className='flex'>
                        <Box sx={{
                            borderRadius: '15px',
                            width:'88px',
                            padding: '4px 12px 4px 10px',
                            gap: '6px',
                            height:'28px',
                            backgroundColor:'#FFFAEB',
                            display:'flex',
                            alignItems:'baseline'
                            }}>
                            <Box sx={{
                                borderRadius:'10px',
                                width:'6px',
                                height:'6px',
                                backgroundColor:'#F79009',
                                display:'flex',
                            }}
                            >
                            </Box>
                            <Typography paragraph sx={{fontSize:'14px',color:'#B54708', fontWeight:'500', lineHeight:'20px'}} >
                                Not Live
                            </Typography>
                        </Box>
                        <Typography color="#475467" sx={{fontSize:'16px', fontWeight:'400', lineHeight:'24px', marginLeft:'10px'}} >
                            Layers Auction
                        </Typography>
                    </div>
                </Grid>
                <Grid item md={2} lg={2} sm={4}>
                    <Button  startIcon={<ThumbUpOffAltIcon />} variant='outlined' color='inherit' size='small' sx={{fontSize:'12px', fontWeight:'600'}} >Accept Invite</Button>
                </Grid>    
            </Grid>
        </Box>
   )
}

export default Showcase