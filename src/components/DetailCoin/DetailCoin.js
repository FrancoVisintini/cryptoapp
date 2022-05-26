import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '200%',
  maxHeight: '200%',
});

export default function DetailCoin() {

    const {coinID} = useParams();

    const [coin, setCoin] = useState({})

    useEffect(()=>{
        fetch(`https://api.coinstats.app/public/v1/coins/${coinID}?currency=USD`)
            .then(res => res.json())
            .then(data => {
                return {
                    rank: data.coin.rank,
                    name: data.coin.name,
                    symbol: data.coin.symbol,
                    icon: data.coin.icon,
                    priceUSD: Intl.NumberFormat('es-AR').format(data.coin.price),
                    websiteUrl: data.coin.websiteUrl
                }})
            .then(coinDetail => {
                setCoin(coinDetail);
            })
            
    },[])


    return (
        <Paper
        sx={{
            p: 2,
            margin: 'auto',
            maxWidth: '50%',
            flexGrow: 1,
            backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
        >
        <Grid container spacing={2}>
            <Grid item>
            <ButtonBase sx={{ width: 200, height: 200 }} href={coin.websiteUrl}>
                <Img alt="complex" src={coin.icon} width= {150} height={150} />
            </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="h3" component="div">
                            {coin.name}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            {coin.symbol}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Price USD: {coin.priceUSD}
                        </Typography>
                        <Button component="div" href={coin.websiteUrl}>
                            <Typography variant="body1" gutterBottom >
                                Website
                            </Typography>
                        </Button>
                    </Grid>
                    <Button href='/coins' component="div" variant="contained">
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                Back
                            </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        </Paper>
    );
}