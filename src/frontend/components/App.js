import './App.css';
import { Navbar } from "./Components/Navbar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './Pages/Home';
import { BuyensPage } from "./Pages/BuyensPage";
import { About } from './Components/About';
import { Marketplace } from "./Components/Marketplace";
import { Footer } from "./Components/Footer";
import ListEnsPage from './Pages/ListEnsPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/marketplace' element={<Marketplace />} />
        <Route path='/buyens' element={<BuyensPage/>} />
        <Route path='/listens' element={<ListEnsPage/>} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
