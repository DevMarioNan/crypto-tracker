import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Grid, Typography } from '@mui/material';
import { useGetCryptoDetailsQuery } from '../services/cryptoAPI';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NumbersIcon from '@mui/icons-material/Numbers';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CheckIcon from '@mui/icons-material/Check';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { FormControl, MenuItem, Select,List,ListItem } from '@mui/material';
import LineChart from './LineChart';
import { useGetCryptoHistoryQuery } from '../services/cryptoAPI';

const CryptoDetails = () => {
    const { coinId } = useParams();
    const [timePeriod, setTimePeriod] = useState('7d');
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const { data: coinHistory} = useGetCryptoHistoryQuery({coinId,timePeriod});
    const cryptoDetails = data?.data?.coin;
    
    const handleChange = (e) => {
        setTimePeriod(e.target.value);
        
    }


    if(isFetching) return (<Typography variant="h3" color="white" align="center" sx={{margin:"2rem 0"}}>Loading...</Typography>);
    
    
    

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <MonetizationOnIcon sx={{color:"white"}}/> },
        { title: 'Rank', value: cryptoDetails?.rank, icon: <NumbersIcon sx={{color:"white"}}/> },
        { title: '24h Volume', value: `$ ${cryptoDetails?.['24hVolume'] && millify(cryptoDetails?.['24hVolume'])}`, icon: <ElectricBoltIcon sx={{color:"white"}}/> },
        { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <MonetizationOnIcon sx={{color:"white"}}/> },
        { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <EmojiEventsIcon sx={{color:"white"}}/> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <ShowChartIcon sx={{color:"white"}}/> },
        { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <CreditScoreIcon sx={{color:"white"}}/> },
        { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckIcon sx={{color:"white"}}/> : <DoDisturbAltIcon sx={{color:"white"}}/>, icon: <ErrorOutlineIcon sx={{color:"white"}}/> },
        { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ErrorOutlineIcon sx={{color:"white"}}/> },
        { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ErrorOutlineIcon sx={{color:"white"}}/> },
    ];

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="h2" gutterBottom align='center' color="white" sx={{m:'2rem 0'}}>{cryptoDetails?.name} ({cryptoDetails?.symbol}) Price</Typography>
                <Typography variant="h5" gutterBottom align='center' color="white" sx={{m:'2rem 0'}}>{cryptoDetails?.name} live price in US dollars. View value statistics, market cap and supply.</Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} align="center">
            <FormControl sx={{ m: 1, minWidth: 150,textAlign:"left" }}>
                    <Select
                        value={timePeriod}
                        onChange={(e)=>handleChange(e)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' ,sx:{color:"white"}}}
                    >
                        {time.map((t) => (
                            <MenuItem key={t} value={t}>{t}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={12} md={12} lg={12} align="center">
            <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name}/>
            </Grid>

            <Grid container className="stats-container">
                <Grid item xs={12} sm={12} md={12} lg={6} align="center">
                    <Grid container spacing={4} className="coin-value-statistics" align="center">
                        <Grid item xs={12} sm={12} md={12} lg={12} className="coin-details-heading" align="center">
                            <Typography variant="h4" gutterBottom align='center' color="white" sx={{m:'2rem 0'}}>{cryptoDetails?.name} Value Statistics</Typography>
                            <Typography variant="h6" gutterBottom align='center' color="white" sx={{m:'2rem 0'}}>An overview showing the statistics of {cryptoDetails?.name}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} className="coin-stats" align="center">
                            <List sx={{ width: '100%', maxWidth: 450, bgcolor: '#03C988' }}>
                                {stats.map(({ icon, title, value }) => (
                                    <ListItem key={title} sx={{borderBottom:"1px solid #E5E5CB"}}>
                                        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                                            <Grid item>
                                                {icon}
                                            </Grid>
                                            <Grid  item xs>
                                                <Typography sx={{textAlign:"left",m:'2rem 0'}} variant="h6" gutterBottom  color="white" >{title}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="h6" gutterBottom align='center' color="white" sx={{m:'2rem 0'}}>{value }</Typography>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            
            
            <Grid item xs={12} sm={12} md={12} lg={6} align="center">
                    <Grid container spacing={4} className="other-stats-info" align="center">
                        <Grid item xs={12} sm={12} md={12} lg={12} className="coin-details-heading" align="center">
                            <Typography variant="h4" gutterBottom align='center' color="white" sx={{m:'2rem 0'}}>Other Statistics</Typography>
                            <Typography variant="h6" gutterBottom align='center' color="white" sx={{m:'2rem 0'}}>overview of the statistics of all cryptoCurrencies.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} className="coin-stats" align="center">
                            <List sx={{ width: '90%', maxWidth: 450, bgcolor: '#03C988' }}>
                                {genericStats.map(({ icon, title, value }) => (
                                    <ListItem key={title} sx={{borderBottom:"1px solid #E5E5CB"}}>
                                        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                                            <Grid item>
                                                {icon}
                                            </Grid>
                                            <Grid  item xs>
                                                <Typography sx={{textAlign:"left",m:'2rem 0'}} variant="h6" gutterBottom  color="white" >{title}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="h6" gutterBottom align='center' color="white" sx={{m:'2rem 0'}}>{value }</Typography>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid item xs={12} sm={12} md={12} lg={6} align="center">
                <Typography variant="h3" gutterBottom align='center' color="#453C67" sx={{m:'2rem 0'}}>What is {cryptoDetails?.name} ({cryptoDetails?.symbol})?</Typography>
                <Typography variant="h6" gutterBottom align='center' color="white" sx={{m:'2rem 0'}}>{cryptoDetails?.description? HTMLReactParser(cryptoDetails.description) : 'no desctiption'}</Typography>
            </Grid>
            
            <Grid item xs={12} sm={12} md={12} lg={6} className="coin-links" align="center">
                <Typography variant="h3" gutterBottom align='center' color="#453C67" sx={{m:'2rem 0'}}>{cryptoDetails?.name} Links</Typography>
                
                <List sx={{ width: '100%', maxWidth: 450, bgcolor: '#03C988' }}>
                                {cryptoDetails?.links?.map((link) => (
                                    <ListItem key={link.name} sx={{borderBottom:"1px solid #E5E5CB"}}>
                                        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                                            <Grid  item xs>
                                                <Typography sx={{textAlign:"left",m:'2rem 0'}} variant="h6" gutterBottom  color="white" >{link.type}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <a href={link.url} target="_blank" rel="noreferrer" style={{margin:'2rem 0',textDecoration:"none"}}>{link.name}</a>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                ))}
                            </List>
                
            </Grid>

        </Grid>
    );
}

export default CryptoDetails;