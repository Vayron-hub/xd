import Navbar from './Navbar';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


export default function Asimetrico() {
    return (
        <div>
            <Navbar />
            <Card sx={{
                minWidth: 275,
                justifyContent: 'center',
                display: 'flex',
                padding: '20px',
                marginTop: '200px',
                marginLeft: '400px',
                marginRight: '400px',
                bgcolor: '#f5f5f5'
            }}>
                <CardContent>
                    <Typography gutterBottom sx={{ fontSize: 15 }}>
                        Cifrado de clave Asimétrica
                    </Typography>
                    <label>Ingrese un mensaje</label><br />
                    <input type='text' ></input>
                    <Button variant="contained" style={{ marginLeft: '10px' }}>Cifrar</Button>
                </CardContent>
                <CardActions>

                </CardActions>
            </Card>
        </div>
    )
}