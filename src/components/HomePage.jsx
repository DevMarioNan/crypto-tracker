import React from 'react'
import {Grid , Typography} from '@mui/material'
import { useGetCryptosQuery } from '../services/cryptoAPI'
import millify from 'millify';
import {Link} from 'react-router-dom';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import { Box } from '@mui/system';


const HomePage = ()=> {
    

    const {data , isFetching} = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if(isFetching) return (<Typography variant="h3" color="white" align="center" sx={{margin:"2rem 0"}}>Loading...</Typography> );

    return (
        <Box align="center" sx={{width:"90%"}}>
            <Typography variant="h3" color="white" align="center" sx={{padding:"2rem 0"}}>
                Global Crypto Stats
            </Typography>
            <Grid container spacing={2} color="white" align="center" >
                
                <Grid item xs={6}>
                    <Typography variant="h6" color="#B6EADA" align="left" sx={{margin:"2rem 0"}}>
                        Total Cryptocurrencies
                    </Typography>
                    <Typography variant="h4" color="white" align="left" sx={{margin:"2rem 0"}}>
                        {millify(globalStats.total)}
                    </Typography>
                </Grid>
                
                <Grid item xs={6}>
                    <Typography variant="h6" color="#B6EADA" align="left" sx={{margin:"2rem 0"}}>
                        Total Exchanges
                    </Typography>
                    <Typography variant="h4" color="white" align="left" sx={{margin:"2rem 0"}}>
                        {millify(globalStats.totalExchanges)}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="h6" color="#B6EADA" align="left" sx={{margin:"2rem 0"}}>
                        Total Market Cap
                    </Typography>
                    <Typography variant="h4" color="white" align="left" sx={{margin:"2rem 0"}}>
                        {millify(globalStats.totalMarketCap)}
                    </Typography>
                </Grid>
                
                <Grid item xs={6}>
                    <Typography variant="h6" color="#B6EADA" align="left" sx={{margin:"2rem 0"}}>
                        Total 24h Volume
                    </Typography>
                    <Typography variant="h4" color="white" align="left" sx={{margin:"2rem 0"}}>
                        {millify(globalStats.total24hVolume)}
                    </Typography>
                </Grid>
                
                <Grid item xs={6}>
                    <Typography variant="h6" color="#B6EADA" align="left" sx={{margin:"2rem 0"}}>
                        Total Markets
                    </Typography>
                    <Typography variant="h4" color="white" align="left" sx={{margin:"2rem 0"}}>
                        {millify(globalStats.totalMarkets)}
                    </Typography>
                </Grid>
            </Grid>

            <div className="home-heading-container">
                <Typography variant="h3" color="white" align="center" sx={{margin:"1rem 0"}}>
                    Top 10 Cryptocurrencies in the world
                </Typography>
            </div>
            <Cryptocurrencies simplified/>
            <Link to="/cryptocurrencies" style={{color:"white",textDecoration:"none"}}>
                    <Typography variant="h5"color="#453C67" align="center" sx={{mt:'1rem',textDecoration:"none"}}>
                        Show more    
                    </Typography>
                </Link>

            <div className="home-heading-container">
                <Typography variant="h3" color="white" align="center" sx={{margin:"1rem 0"}}>
                    Latest Crypto News
                </Typography>
            </div>
            <News simplified/>
            <Link to="/news" style={{color:"white",textDecoration:"none"}}>
                    <Typography variant="h5"color="#453C67" align="center" sx={{mt:'1rem',textDecoration:"none"}}>
                        Show more    
                    </Typography>
                </Link>

        </Box>
    )
}

export default HomePage