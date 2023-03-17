import * as React from 'react';
// import oppor from '../img/Imagelaptop.png';
import { Card } from '@mui/material/';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system';
import IconButton from '@mui/material/Button';
import Button from '@mui/material/Button';
import { useGetAllProductsQuery } from '../Redux/apiSlice';



const CardItem = () => {

    const {data} = useGetAllProductsQuery();

    console.log(data)

   return(
        <Grid container spacing={2}>
            {
                data &&  data.data.map(({bid, image, name, title }) =>{
                    return(
                        <Grid item>
                            <Card sx={{ border: 1, borderColor: 'divider', borderRadius: '15px', height:'360px', width:'293.5px', boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)', marginTop:'20px'}}>
                                <CardMedia
                                    sx={{ height: 132, width: 269.5, borderRadius: '15px', margin:'10px'}}
                                    image={image}
                                    title={title}
                                />
                                <CardContent sx={{ borderBottom: 1, borderColor: 'divider'}}>
                                    <div className='flex'>
                                        <Box  
                                            sx={{
                                                borderRadius: '200px',
                                                width:'32px',
                                                height:'32px',
                                                backgroundColor:'#F2F4F7',
                                                }}
                                            >
                                            <Typography sx={{fontSize:'14px',color:'#475467', fontWeight:'500', lineHeight:'20px', textAlign:'center', padding:'5px 0px'}}>
                                                KO
                                            </Typography>
                                        </Box>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'14px',color:'#101828', fontWeight:'500',marginLeft:'10px', lineHeight:'20px', alignItems:'center'}}>
                                        {name}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'14px',color:'#98A2B3', fontWeight:'500',marginLeft:'5px', lineHeight:'20px', alignItems:'center'}}>
                                            (highest bidder)
                                        </Typography>
                                    </div>
                                    <Typography sx={{fontSize:'14px',color:'#101828', fontWeight:'600',lineHeight:'20px', alignItems:'center', marginTop:'10px'}}>
                                    {title}
                                    </Typography>
                                    <div className='flex'>
                                        <Typography sx={{fontSize:'14px',color:'#344054', fontWeight:'400',lineHeight:'20px', alignItems:'center',}}>
                                            Current bid:
                                        </Typography>
                                        <Typography sx={{fontSize:'14px',color:'#344054', fontWeight:'700',lineHeight:'20px', alignItems:'center',marginLeft:'5px'}}>
                                            {bid}
                                        </Typography>
                                    </div>
                                </CardContent>
                                <IconButton>
                                    <Button variant='contained' color='primary' size='large' sx={{fontSize:'10px', fontWeight:'600',boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)', width:'269.5px', height:'40px'}} >Add to waitList</Button>
                                </IconButton>
                            </Card>
                        </Grid>                        
                    )
                })
            }
        </Grid>
    )
}

export default CardItem