import React from 'react';
import { Link } from 'react-router-dom';
import { Button , Typography } from '@mui/material';


const Navbar = () => {
    return ( 
        <div className='nav-container'>
            <div className='nav-logo'>
                    <Link to='/' style={{textDecorationLine:"none"}}>
                        <Typography variant='h3' color='primary'>
                        Cryptox
                        </Typography>
                    </Link>
            </div>
        </div>
    );
}

export default Navbar;