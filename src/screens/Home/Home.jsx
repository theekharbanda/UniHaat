import { Typography } from '@mui/material';
import { Box, display } from '@mui/system';
import './Home.css';
import Map from '../../Components/Map/Map';
import CityCard from '../../Components/CityCard/CityCard';
export default function Home(){
    return(
        <div className='home'>
            <br></br>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                style={{
                mr: 2,
                flexGrow: 1,
                fontFamily: 'Poppins',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'black',
                textDecoration: 'none',
                }}
            >
                District Wise Products
            </Typography>  
            <br></br>
            <Typography
                variant="sibtitle1"
                Wrap
                component="a"
                href=""
                style={{
                mr: 2,
                fontFamily: 'Poppins',
                color: 'black',
                textDecoration: 'none',
                }}
            >
                Only Lucknow's Chicken Kari Shops Available Right Now.
            </Typography>
            <br></br>
            <br></br>    
            <br></br>    
            <Box sx={{
                width:'70%',
                height:'50%',
                transform: 'translate(20%)',
                display:{sm:'',md:'flex'},

            }}>
                <Box style={{
                    flex:0.5,

                }}>
                    <Map />
                </Box>
                <Box style={{
                    flex:0.5,
                }}>
                    <CityCard/>
                </Box>
                
                
            </Box>  
        </div>
    );

}