import React, {useState} from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography,CardActionArea } from "@mui/material";
import { Grid,TextField } from "@mui/material";
import { useGetCryptosQuery } from "../services/cryptoAPI";

const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);    
    if (isFetching) return "Loading...";
    if(!cryptos) {
        setCryptos(cryptosList?.data?.coins);
    };
    

    return ( 
        <>
            {!simplified &&
            <TextField 
            fullWidth
            InputLabelProps={{style: {color: '#B6EADA',fontSize:'1em'}}}
            inputProps={{style: {color: 'white',fontSize:'2em',height:'1em'}}}
            sx={{m:'1rem auto'}} 
            id="outlined-basic" 
            label="Search Crypto" 
            variant="standard" 
            onChange={(e)=>setCryptos(cryptosList?.data?.coins.filter((crypto)=>crypto.name.toLowerCase().includes(e.target.value.toLowerCase())))} 
            />
                }
            
            <Grid container spacing={2} color="white" >
                {cryptos?.map((crypto) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={crypto.uuid}>
                        <CardActionArea  component={Link} to={`/crypto/${crypto.uuid}`}>
                        <Card  sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                style={{
                                    objectFit: "contain",
                                    padding: "1rem 0",
                                }}
                                image={crypto.iconUrl}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {crypto.rank}. {crypto.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price: {millify(crypto.price)}$<br/>
                                    Market Cap: {millify(crypto.marketCap)}<br/>
                                    Daily Change: {millify(crypto.change)}<br/>
                                </Typography>
                            </CardContent>
                        </Card>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>

        </>
    );
}

export default Cryptocurrencies;