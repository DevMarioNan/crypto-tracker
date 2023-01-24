import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app" style={{ display: 'flex' ,width:"100%"}}>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main' style={{width:'100%',backgroundColor:"#362222",padding:'1rem'}}>
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
      </div>
    </div>
  );
}

export default App;
