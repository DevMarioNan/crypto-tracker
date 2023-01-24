import React from 'react'
import {Grid , Typography} from '@mui/material'


function HomePage() {
    return (
        <>
            <Typography variant="h3" color="white" align="center" sx={{margin:"2rem 0"}}>
                Global Crypto Stats
            </Typography>
            <Grid container spacing={2} >
                <Grid item xs={6}>item </Grid>
                <Grid item xs={6}>item </Grid>
                <Grid item xs={6}>item </Grid>
                <Grid item xs={6}>item </Grid>
                <Grid item xs={6}>item </Grid>
            </Grid>
        </>
    )
}

export default HomePage