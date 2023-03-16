import * as React from 'react';
import {Typography}  from "@mui/material";
import {Toolbar}  from "@mui/material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import IconButton from '@mui/material/Button';
import { Box } from '@mui/system';




const Navbar = () => {

   return(
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', margin:'15px 32px',}}>
                <div>
                    <Typography
                    component="div"
                    variant="h5"
                    color="inherit"
                    align="left"
                    noWrap
                    sx={{ flex: 1, fontWeigh:'600', fontSize:'30px', lineHeight:'38px' }}
                    >
                    Welcome
                    </Typography>
                    <Typography
                    component="h4"
                    variant="subtittle1"
                    color="#475467"
                    align="left"
                    noWrap
                    sx={{ flex: 1, lineHeight:'24px', fontWeight:'400' , fontSize:'16px',mb:'15px'}}
                    >
                    Your current sales auction and activity
                    </Typography>
                </div>
                <IconButton sx={{marginLeft:"auto", color:'#667085'}}>
                    <NotificationsNoneOutlinedIcon />
                    <Box sx={{
                            borderRadius:'16px',
                            padding:'2px, 8px, 2px, 8px',
                            width:'24px',
                            height:'22px',
                            backgroundColor:'#F04438',
                            display:'flex',
                            position:'absolute',
                            top: '19px',
                            left:'35px',
                        }}
                    >
                        <Typography
                            color="#ffffff"
                            sx={{lineHeight:'18px', fontWeight:'500' , fontSize:'12px', textAlign:'center',padding:'3px 9px'}}
                        >
                            2
                        </Typography>

                    </Box>
                </IconButton>
            </Toolbar>
        </React.Fragment>
   )
}

export default Navbar