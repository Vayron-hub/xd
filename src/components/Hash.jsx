import Navbar from './Navbar';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useState, useRef } from 'react';
import CryptoJS from 'crypto-js';


export default function Hash() {

    const [cifrado, setCifrado] = useState('')
    const mensajeRef = useRef(null);

    const encript = () => {
        let txtcifrado = CryptoJS.SHA256(mensajeRef).toString();
        setCifrado(txtcifrado);
    }

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
                        Cifrado de clave Hashc
                    </Typography>
                    <label>Ingrese un mensaje</label><br />
                    <input type='text' ref={mensajeRef}></input>
                    <Button onClick={encript} variant="contained" style={{ marginLeft: '10px' }}>Cifrar</Button><br />
                    <h5>Resultado:</h5><br /><div style={{ wordBreak: 'break-word' }}>{cifrado}</div>                </CardContent>
                <CardActions>

                </CardActions>
            </Card>
        </div>
    )
}