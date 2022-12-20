import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Lucknow from '../../assets/Lucknow.jpg';

export default function CityCard() {
  return (
    <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        image={Lucknow}
      />
      <CardContent >
        <Typography style={{fontWeight:'bold'}} gutterBottom variant="h5" component="div" fontFamily={"Poppins"}>
          Lucknow
        </Typography>
        <Typography  gutterBottom variant="subtitle1" component="div" fontFamily={"Poppins"}>
          Chicken Kari
        </Typography>
        <Typography variant="body2" color="text.secondary" fontFamily={"Poppins"}>
        The city is quite famous for its traditional chikan embroidery work, which attracts travelers from all across the country. The places to shop in Lucknow include the city's markets, with their narrow old lanes and countless shops, where shopping itself has its own charm.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}