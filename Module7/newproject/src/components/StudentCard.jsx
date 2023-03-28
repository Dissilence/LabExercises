import { Link } from "react-router-dom"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function StudentCard({id, name, location, set = 'set1'}) {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActions>
        <CardMedia
          component="img"
          alt="Student Card"
          height="140"
          image={`https://robohash.org/${name}?size=50x50&set=${set}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
        </CardContent>
        </CardActions>
        <CardActions>
          <Button size="small">More Info</Button>
        </CardActions>
      </Card>
    );
  }
