import React,{useState} from 'react'
import {AppBar , Box,IconButton , Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { Link ,useLocation} from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import {Drawer,List,ListItem,ListItemIcon,ListItemText} from "@mui/material"

const Appbar = () => {

    const [open, setOpen] = useState(false);

    const location = useLocation()

    const menuItems = [
        {
            listIcon: <HomeIcon />,
            listText: "Home",
            listPath: "/",
        },
        {
            listIcon: <CurrencyBitcoinIcon />,
            listText: "CryptoCurrencies",
            listPath: "/cryptocurrencies",
        },
        
        {
            listIcon: <NewspaperIcon />,
            listText: "News",
            listPath: "/news",
        },
        
    ];

    return (
    <>
        <Box sx={{display: {xs: 'block', sm: 'block' ,md:'none' , lg:'none' , xl:'none'}, flexGrow: 1 }}>
                <AppBar position="static" sx={{backgroundColor:"#171010"}} >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setOpen(true)}
                        >
                        <MenuIcon />
                        </IconButton>
                        <Link to="/" style={{ display:'flex',textDecorationLine: "none" ,justifyContent:'center'}}>
                        <Typography
                            sx={{ display: "flex", alignItems: "center" }}
                            variant="h4"
                            color="primary"
                        >
                            <CurrencyBitcoinIcon sx={{ fontSize: "2em" }} color="primary" />
                            Cryptox
                        </Typography>
                    </Link>
                    </Toolbar>
                </AppBar>
        
        </Box>
        <Drawer
        anchor={'left'}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
            sx: {
                    backgroundColor: "#171010",
                    color: "#fff",
                    
                }
            }}
    >
        <List >
                {menuItems.map((item, key) => (
                    <ListItem button sx={{py:'2rem'}} key={key} component={Link} to={item.listPath} style={location.pathname === item.listPath ? {background:'#423F3E'} : null}>
                        <ListItemIcon sx={{color:"white"}}>{item.listIcon}</ListItemIcon>
                        <ListItemText  style={{fontSize:"1em"}} primary={item.listText}  />
                    </ListItem>
                ))}
            </List>
    </Drawer>
    </>
    )
}

export default Appbar