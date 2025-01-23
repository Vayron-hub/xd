import Navbar from './Navbar';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { useState, useRef } from 'react';
import JSEncrypt from 'jsencrypt';


export default function Asimetrico() {
    let encrypt = new JSEncrypt();
    const [cifrado, setCifrado] = useState('');

    const mensajeRef = useRef(null);
    const clave1Ref = encrypt.getPublicKey();
    const clave2Ref = encrypt.getPrivateKey();



    const encript = () => {
        let mensaje = mensajeRef.current.value;
        let txtcifrado = encrypt.encrypt(mensaje, clave1Ref, clave2Ref);
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
                    <label>Ingrese un mensaje</label><br />
                    <input type='text' ref={mensajeRef} ></input><br />
                    <label>Ingrese una clave publica</label><br />
                    <input type='text' value={clave1Ref} ></input><br />
                    <label>Ingrese una clave privada</label><br />
                    <input type='text' value={clave2Ref} ></input>
                    <Button onClick={encript} variant="contained" style={{ marginLeft: '10px' }}>Cifrar</Button><br />
                    <h5>Resultado:</h5><br/><div style={{ wordBreak:'break-word'}}>{cifrado}</div>
                </CardContent>
                <CardActions>

                </CardActions>
            </Card>
        </div>
    )
}