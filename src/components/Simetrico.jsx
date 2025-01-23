import Navbar from './Navbar';
import React, { useState, useRef } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import CryptoJS from 'crypto-js';

export default function Simetrico() {

    const [cifrado, setCifrado] = useState('');
    /*Aquí estamos utilizando el hook useRef de React para crear referencias 
      a los elementos del DOM. mensajeRef y claveRef 
      serán referencias que apuntarán a los elementos de entrada
      (input) correspondientes. Al iniciar, ambas referencias son null.*/ 
      
    const mensajeRef = useRef(null);
    const claveRef = useRef(null);

    const encript = () => {
        let mensaje = mensajeRef.current.value;
        let clave = claveRef.current.value;

        let cifradoTexto = CryptoJS.AES.encrypt(mensaje, clave).toString();
        setCifrado(cifradoTexto);
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
                        Cifrado de clave Simétrica
                    </Typography>
                    <label>Ingrese un mensaje</label><br />
                    <input type='text' ref={mensajeRef}></input><br />
                    <label>Ingrese una clave</label><br />
                    <input type='text' ref={claveRef}></input>
                    <Button onClick={encript} variant="contained" style={{ marginLeft: '10px' }}>Cifrar</Button><br />
                    <label>Resultado:</label> <span>{cifrado}</span>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </div>
    )
}
