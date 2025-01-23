import Navbar from './Navbar';
import React, { useState, useRef } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CryptoJS from 'crypto-js';

export default function Simetrico() {

    const [cifrado, setCifrado] = useState('');
    /*Aquí estamos utilizando el hook useRef de React para crear referencias 
      a los elementos del DOM. mensajeRef y claveRef 
      serán referencias que apuntarán a los elementos de entrada
      (input) correspondientes. Al iniciar, ambas referencias son null.*/

    const mensajeRef = useRef(null);
    const claveRef = useRef(null);
    const [algoritmoRef, setAlgoritmoRef] = useState('');

    const handleChange = (event) => {
        setAlgoritmoRef(event.target.value);
        console.log(event.target.value);
      };

    const encript = () => {
        switch (algoritmoRef) {
            case 'AES':
                CryptoJS.algoritmoRef = CryptoJS.AES;
                break;  
            case 'DES':
                CryptoJS.algoritmoRef = CryptoJS.DES;
                break;
            case 'TripleDES':
                CryptoJS.algoritmoRef = CryptoJS.TripleDES;
                break;
            default:
                CryptoJS.algoritmoRef = CryptoJS.AES;
                break;}
        /*mensajeRef.current.value y claveRef.current.value: 
          Aquí estamos accediendo a los valores actuales de 
          los campos de entrada (input) a través de sus respectivas 
          referencias (mensajeRef y claveRef).*/
        let mensaje = mensajeRef.current.value;
        let clave = claveRef.current.value;
        let cifradoTexto = CryptoJS.algoritmoRef.encrypt(mensaje, clave).toString();
        let descifrado = CryptoJS.algoritmoRef.decrypt(cifradoTexto, clave).toString(CryptoJS.enc.Utf8);
        console.log(descifrado);
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
                    <Typography gutterBottom sx={{ fontSize: 25 }}>
                        Cifrado de clave Simétrica
                    </Typography>
                    <br/>
                    <FormControl>
                        <InputLabel id="alg">Algoritmo</InputLabel>
                        <Select
                            style={{ width: '150px' }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={algoritmoRef}
                            label="algoritmo"
                            onChange={handleChange}>

                            <MenuItem value='AES'>AES</MenuItem>
                            <MenuItem value='DES'>DES</MenuItem>
                            <MenuItem value={'TripleDES'}>Triple DES</MenuItem>
                        </Select>
                    </FormControl><br/>

                    <label>Ingrese un mensaje</label><br />
                    <input type='text' ref={mensajeRef}></input><br />
                    <label>Ingrese una clave</label><br />
                    <input type='text' ref={claveRef}></input>
                    <Button onClick={encript} variant="contained" style={{ marginLeft: '10px' }}>Cifrar</Button><br />
                    <h5>Resultado:</h5> <h5>{cifrado}</h5>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </div>
    )
}
