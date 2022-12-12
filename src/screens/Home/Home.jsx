import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import './Home.css';
export default function Home(){
    return(
        <div className='home'>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: 'Poppins',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
                }}
            >
                District Wise Products
            </Typography>      
            <Box>
            </Box>  
        </div>
    );

}