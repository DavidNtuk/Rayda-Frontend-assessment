import * as React from 'react';
import {Typography}  from "@mui/material";
import {Toolbar}  from "@mui/material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import IconButton from '@mui/material/Button';




const Navbar = () => {

   return(
        // <React.Fragment>
        //     <header>
        //         <Toolbar sx={{borderBottom:"2px solid #EAECF0",}} >
        //             <Typography sx={{fontSize:"30px" , fontWeight: "600"}}  variant="h4">Welcome</Typography>
        //             <Typography sx={{fontSize:"16px" , fontWeight: "400"}}  variant="h4">Your current sales auction and activity</Typography>
        //             <NotificationsNoneOutlinedIcon sx={{marginLeft:"auto", color: "neutral.lighter"}} />
        //         </Toolbar>
        //     </header>
        // </React.Fragment>
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
                </IconButton>
            </Toolbar>
        </React.Fragment>
   )
}

export default Navbar