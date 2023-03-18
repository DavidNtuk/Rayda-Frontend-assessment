import * as React from 'react';
import {Badge, Typography}  from "@mui/material";
import {Toolbar}  from "@mui/material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import IconButton from '@mui/material/Button';
import '../App.css'




const Navbar = () => {

   return(
        <React.Fragment>
            <Toolbar className='border_divider'>
                <div>
                    <Typography
                    className='nav_text_1'
                    component="div"
                    variant="h5"
                    color="inherit"
                    align="left"
                    noWrap
                    >
                    Welcome
                    </Typography>
                    <Typography
                    className='nav_text_2'
                    component="h4"
                    variant="subtittle1"
                    color="#475467"
                    align="left"
                    noWrap
                    >
                    Your current sales auction and activity
                    </Typography>
                </div>
                <IconButton sx={{marginLeft:"auto", color:'#667085'}}>
                    <Badge badgeContent={2} color='error' anchorOrigin={{vertical:'bottom', horizontal:'right'}}>
                        <NotificationsNoneOutlinedIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </React.Fragment>
   )
}

export default Navbar