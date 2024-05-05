import './App.css';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom' 
import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';
import RendezvenyekLista from './components/RendezvenyekLista.jsx';
import UjFelhasznalo from './components/UjFelhasznalo.jsx';
import Header from './components/Header.jsx';
import RegOrLog from './components/RegOrLog.jsx';
import Cart from './components/Cart.jsx';
import { RendezvenyekProvider } from './contexts/RendezvenyekContext.jsx';
import { JegyekProvider } from './contexts/JegyekContext.jsx';
import Footer from './components/Footer';
import { FelhasznaloProvider } from './contexts/FelhasznaloContext.jsx';



function App() {
  return (
    <Router>
      <Header/>
      <Navbar/>
      <JegyekProvider>
      <RendezvenyekProvider>
        <FelhasznaloProvider>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/rendezvenylista' element={<RendezvenyekLista/>} />
        <Route path='/regorlog' element={<RegOrLog />} />
        <Route path='/ujfelhasznalo' element={<UjFelhasznalo/>} />
        <Route path='/kosar' element={<Cart />} />
        <Route path='*' element={<Navigate to={'/'}/>} />
      </Routes>
      </FelhasznaloProvider>
      </RendezvenyekProvider>
      </JegyekProvider>
      <Footer/>
    </Router>
  );
}

export default App;