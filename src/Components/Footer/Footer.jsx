import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer(){
    return(
        <div className="footer">
            <Box
            sx={{flexGrow:1,
            height:'fit-content',
            backgroundColor:'white',
            padding:10
            }}
            >
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={4} md={4} >
                        <Box 
                        sx={{ flexGrow:1,
                            width:'50%'
                        }}>
                            <Typography variant="h5"
                                Wrap
                                component="a"
                                href=""
                                style={{
                                mr: 2,
                                flexGrow: 1,
                                fontFamily: 'Poppins',
                                fontWeight: 700,
                                color: 'black',
                                textDecoration: 'none',
                            }}>
                                About UniHaat 
                            </Typography>
                            <br></br>
                            <Typography Wrap variant="div">
                                Unihaat is a place to explore unique products across districts of India. Currently we are serving Lucknow.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                    <Box 
                        sx={{ flexGrow:1,
                            width:'50%'
                        }}>
                            <Typography variant="h5"
                                Wrap
                                component="a"
                                href=""
                                style={{
                                mr: 2,
                                flexGrow: 1,
                                fontFamily: 'Poppins',
                                fontWeight: 700,
                                color: 'black',
                                textDecoration: 'none',
                            }}>
                                Contact Us.
                            </Typography>
                            <br></br>
                            <IconButton>
                                        <InstagramIcon/>
                            </IconButton>
                            <div style={{display:'flex',justifyContent:'flex-start'}}>
                                
                                <CallIcon/>
                                +91-9997466562 
                                <br></br>
                                 +91-9721126973
                            </div>

                            
                        </Box>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                    <Box 
                        sx={{ flexGrow:1,
                            width:'50%'
                        }}>
                            <Typography variant="h5"
                                Wrap
                                component="a"
                                href=""
                                style={{
                                mr: 2,
                                flexGrow: 1,
                                fontFamily: 'Poppins',
                                fontWeight: 700,
                                color: 'black',
                                textDecoration: 'none',
                            }}>
                                Email Us.
                            </Typography>
                            <br></br>
                            
                        </Box>
                    </Grid>
                    <Divider sx={{color:'black',width:'100%'}}/>
                    <br></br>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <CopyrightIcon/>
                        <Typography variant="caption" fontFamily={"Poppins"}>
                            All Copyrights Reserved.
                        </Typography>
                    </div>
                </Grid>

            </Box>
        </div>
    );
}