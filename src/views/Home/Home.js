import './Home.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <Box sx={{ 
        height: 300,
        flexGrow: 1 }}>
        <Grid container height={300} alignItems='center'>
            <Grid item xs={6} md={6} >
                <h1>Welcome to Crypto Planet</h1>
            </Grid>
            <Grid item xs={6}>
                <h3>Find all the crypto data you need!</h3>
                <Link to='/coins'>
                    <Button variant="contained">Coins!</Button>
                </Link>
                
            </Grid>
        </Grid>
    </Box>
  );
}