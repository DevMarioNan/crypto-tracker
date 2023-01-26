import React from 'react'
import { Typography } from '@mui/material'
import {Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
    return (
        
        <Typography variant="body2" color="#B6EADA" align="center" sx={{ mt: 4 }}>
            Cryptox <br />
            all rights reserved &copy; made by Mario Nan <a href="https://github.com/DevMarioNan" target="_blank" rel="noreferrer"><GitHubIcon sx={{color:"white",fontSize:'1.5em'}}/></a>
        </Typography>
    )
}

export default Footer