import React from 'react'
import { Line } from 'react-chartjs-2'
import { Box, Typography } from '@mui/material'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from 'chart.js'

import moment from 'moment/moment'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)


const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = coinHistory?.data?.history?.length -1; i >=0 ; i -= 1) {
        coinPrice.push(coinHistory?.data?.history[i]?.price);
    }

    for (let i = coinHistory?.data?.history?.length - 1; i >= 0; i -= 1) {
        let d = new Date(0);
        d.setUTCSeconds(coinHistory?.data?.history[i]?.timestamp)
        const time = moment(d).format('DD/MM/YYYY')
        coinTimestamp.push(time);
        
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: "Price in USD",
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
        
    };


    return (


        <>
            <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                <Typography variant='h4' sx={{ color: '#fff', marginBottom: '1rem' }}>{coinName} Price Chart</Typography>
                <Box>
                    <Typography variant='h6' sx={{ color: '#fff', marginBottom: '1rem' }}>
                        {coinHistory?.data?.change}%
                        current {coinName} price : ${currentPrice}
                    </Typography>
                </Box>
                <Box sx={{ width: '95%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem', backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                    <Line options={options} data={data} />
                </Box>
            </Box>
        </>
    )
}

export default LineChart