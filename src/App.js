import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';
import Footer from './components/Footer';
import Appbar from './components/Appbar';
import { Box } from '@mui/system';

function App() {
  return (
    <Box className="app" sx={{ display: {xs: 'block', sm: 'block' ,md:'flex' , lg:'flex' , xl:'flex'} ,width:"100vw"}}>
      
      <Appbar />
      <div className='navbar'>
        <Navbar /> 
      </div>
      <Box className='main' align="center" style={{width:'100%',backgroundColor:"#03C988"}}>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/exchanges' element={<Exchanges />} />
          <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
          <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
          <Route exact path='/news' element={<News />} />
        </Routes>
        <div >
          <Footer />
        </div>
      </Box>
    </Box>
  );
}

export default App;
