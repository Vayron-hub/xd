import Card from './components/card';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Simetrico from './components/Simetrico';
import Asimetrico from './components/Asimetrico';
import Hash from './components/Hash';
import Mine from './components/Mine';

// Componente Home con las tarjetas
function Home() {
  const location = useLocation();

  // Mostrar las tarjetas solo si estamos en "/"
  const mostrarHome = location.pathname === '/';

  return (
    <>
      {mostrarHome && (
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              backgroundColor: '#171b25'
            }}
          >
            <Grid container spacing={2} style={{ justifyContent: 'center' }}>
            <Grid item size={12} style={{ textAlign: 'center' }}>
              <h1 style={{ color: 'white' }}>Cifrados</h1>
            </Grid>
              <Grid item xs={12} md={3}>
                <Card nombre="Cifrado de clave simétrica" url="/simetrico" />
              </Grid>
              <Grid item xs={12} md={3}>
                <Card nombre="Cifrado de clave asimétrica" url="/asimetrico" />
              </Grid>
              <Grid item xs={12} md={3}>
                <Card nombre="Cifrado de función hash" url="/hash" />
              </Grid>
              <Grid item xs={12} md={3}>
                <Card nombre="Mi Cifrado de función simètrica" url="/mine" />
              </Grid>
            </Grid>
          </Box>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/simetrico" element={<Simetrico />} />
        <Route path="/asimetrico" element={<Asimetrico />} />
        <Route path="/hash" element={<Hash />} />
        <Route path="/mine" element={<Mine />} />
      </Routes>
    </Router>
  );
}

export default App;
