import React from "react";
import { Link, useLocation } from "react-router-dom";
import {  Typography,Drawer  } from "@mui/material";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import HomeIcon from '@mui/icons-material/Home';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import "../main.css"
import {List , ListItem , ListItemIcon , ListItemText} from "@mui/material"


const Navbar = () => {

    
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
            listIcon: <CurrencyExchangeIcon />,
            listText: "Exchanges",
            listPath: "/exchanges",
        },
        {
            listIcon: <NewspaperIcon />,
            listText: "News",
            listPath: "/news",
        },
        
    ];
    return (

        

        <Drawer
        sx={{
            display: { xs: 'none', sm: 'none' ,md:'flex' , lg:'flex' , xl:'flex'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box' },
            width: "17rem",
        }}
        PaperProps={{
            sx: {
                    backgroundColor: "#171010",
                    color: "#fff",
                    
                }
            }}
            variant="permanent"
            anchor="left"
            classes={{ paper: "nav-drawer" }}
        >
            <div  className="nav-logo">
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
            </div>
            <List >
                {menuItems.map((item, key) => (
                    <ListItem button sx={{py:'2rem'}} key={key} component={Link} to={item.listPath} style={location.pathname === item.listPath ? {background:'#423F3E'} : null}>
                        <ListItemIcon sx={{color:"white"}}>{item.listIcon}</ListItemIcon>
                        <ListItemText  style={{fontSize:"1em"}} primary={item.listText}  />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    
    );
};

export default Navbar;
