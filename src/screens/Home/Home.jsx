import { Typography } from '@mui/material';
import { Box, display } from '@mui/system';
import './Home.css';
import Map from '../../Components/Map/Map';
import CityCard from '../../Components/CityCard/CityCard';
import ShopCard from '../../Components/ShopCard/ShopCard';
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
                    borderRadius:'20px'

                }}>
                    <Map />
                </Box>
                <Box style={{
                    flex:0.5,
                    borderRadius:'20px'
                }}>
                    <CityCard/>
                </Box>
            </Box>  
            <br></br>
            <br></br>
            <Box sx={{
                width:'70%',
                height:'80vh',
                transform: 'translate(20%)',
                backgroundColor:'rgba(74, 224, 94, 0.345) ',
                textAlign:'center',
                overflowY:'scroll',
                position:'relative',
                borderRadius:'20px'
                // padding:'1%',
                
            }}
             className='info'
             >
                <Typography
                    variant="h6"
                    Wrap
                    component="a"
                    href=""
                    sx={{
                    mr: 2,
                    fontFamily: 'Poppins',
                    color: 'black',
                    fontWeight:500,
                    textDecoration: 'none',
                    // position:'absolute'
                    }}
                >
                    Famous Places across Lucknow.
                </Typography>
                {
                    [1,2,3,4].map((index)=>
                        <Box sx={{
                            flex:1,
                            height:'30%',
                            backgroundColor:'yellow',
                            margin:'5%',
                            borderRadius:'20px',
                            marginBottom:'6%'
                        }}>
                            <ShopCard/>
                        </Box>
                    )
                }
            </Box>
            <br></br>
        </div>
    );

}