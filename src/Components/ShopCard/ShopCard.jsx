import { CardContent, Typography,Box,Card,CardMedia } from '@mui/material';
import react from 'react';
import img from '../../assets/Nazrana2.jpg';
import './ShopCard.css';

export default function ShopCard(){
    return(
        <>
            <Card sx={{display:'flex',borderRadius:'20px'}}>
                <Box sx={{flex:0.3, backgroundColor:'black'}}>
                    {/* <CardMedia
                    component='img'
                    image={img}
                    alt="Shop"
                    sx={{objectFit:'contain',maxWidth:'100%'}}
                    /> */}
                    <img src={img}/>
                </Box>
                <Box sx={{flex:0.3}}>
                    <CardContent sx={{display:'flex',flexDirection:'column'}}>
                        <Typography 
                        variant="h5"
                        Wrap
                        component="a"
                        href=""
                        style={{
                        mr: 2,
                        flexGrow: 1,
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        color: 'black',
                        textDecoration: 'none',
                        }}>
                            Name of Shop
                        </Typography>
                        <Typography
                            variant="caption"
                            Wrap
                            component="a"
                            href=""
                            style={{
                            mr: 2,
                            flexGrow: 1,
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            color: 'black',
                            textDecoration: 'none',
                            }}
                        >
                            Description //Clothing Store
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            Wrap
                            component="a"
                            href=""
                            style={{
                            mr: 2,
                            flexGrow: 1,
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            color: 'black',
                            textDecoration: 'none',
                            }}
                        >
                            Address
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            Wrap
                            component="a"
                            href=""
                            style={{
                            mr: 2,
                            flexGrow: 1,
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            color: 'black',
                            textDecoration: 'none',
                            }}
                        >
                            Type.
                        </Typography>
                    </CardContent>
                </Box>
                <Box sx={{flex:0.3}}>

                </Box>
            </Card>
        </>
    );
}