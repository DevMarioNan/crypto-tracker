import React from 'react';
import moment from 'moment/moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, CardHeader } from "@mui/material";
import { Grid, TextField } from "@mui/material";
import { Link } from '@mui/material';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { useGetCryptosQuery } from '../services/cryptoAPI';

const News = ({ simplified }) => {
    const {data } = useGetCryptosQuery(100);
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 10 : 100 });
    const [news, setNews] = useState(cryptoNews?.value);
    if (isFetching) return 'Loading...';
    if (!news) setNews(cryptoNews?.value);
    

    const handleChange = (e) => {
        
        setNewsCategory(e.target.value);
        setNews(cryptoNews?.value);
    }

    return (
        <div >
            {!simplified && (
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        value={newsCategory}
                        onChange={(e)=>handleChange(e)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="Cryptocurrency">
                            <em>Cryptocurrency</em>
                        </MenuItem>
                        {data?.data?.coins?.map((coin) => (
                            <MenuItem key={coin.uuid} value={coin.name}>{coin.name}</MenuItem>
                        ))}
                    </Select>
                    
                </FormControl>

            )}
            <Grid container spacing={2} color="white" >
                {news?.map((newsItem, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                        <CardActionArea component={Link} href={newsItem.url} rel="noopener noreferrer" target="_blank">
                            <Card sx={{ maxWidth: 345, height: "auto" }}>
                                <CardHeader
                                    avatar={newsItem.provider[0]?.image?.thumbnail?.contentUrl && (
                                        <img src={newsItem.provider[0]?.image?.thumbnail?.contentUrl} style={{ height: 50, borderRadius: "0%" }} />
                                    )}
                                    title={newsItem.name}
                                    subheader={moment(newsItem.datePublished).startOf('ss').fromNow()}
                                />
                                {newsItem?.image?.thumbnail?.contentUrl && (
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={newsItem?.image?.thumbnail?.contentUrl}
                                        alt=""
                                    />
                                )}
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {newsItem.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default News;