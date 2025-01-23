import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function BasicCard({ nombre, url }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          Cifrado
        </Typography>
        <Typography variant="h6" component="div">
          {nombre}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={ url } style={{ textDecoration: 'none', color: 'inherit' }}>
          Click aquí
        </Link>
      </CardActions>
    </Card>


  );
}
