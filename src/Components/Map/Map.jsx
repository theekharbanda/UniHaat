import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import UPmap from '../../assets/UPmap.png';
import './Map.css'

export default function Map(){
    return(
        <div className="map_container">
             <Box
             className="map" 
             >
                <TextField value={'Lucknow'} select label="City" fullWidth  variant="filled">
                        <MenuItem value={'Lucknow'}>
                            Lucknow
                        </MenuItem>
                </TextField>
                <img 
                objectFit="cover" 
                src={UPmap} 
                alt ="UP_map"
                useMap="#UPmap"
                />
                <map name="UPmap">
                    <area style={{cursor:'pointer'}} onClick={()=>alert("hi")} coords="180, 128, 240, 200" shape="rect"/>
                </map>
            </Box> 
        </div>
    );
}