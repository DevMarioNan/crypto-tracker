import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Exchanges from './Exchanges';
import Cryptocurrencies from './Cryptocurrencies';
import CryptoDetails from './CryptoDetails';
import News from './News';
import Navbar from './Navbar';



const Layout = () => {

    return (
        <div className="layout">
            <div className='navbar' style={{ display: "flex" }}>
                <Navbar />
            </div>
            <div className='main'>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    {/* <Route exact path='/exchanges'>
            <Exchanges />
          </Route>
          <Route exact path='/cryptocurrencies'>
            <Cryptocurrencies />
          </Route>
          <Route exact path='/crypto/:coinId'>
            <CryptoDetails />
          </Route>
          <Route exact path='/news'>
            <News />
          </Route> */}
                </Routes>
            </div>
        </div>
    );

};

export default Layout;
