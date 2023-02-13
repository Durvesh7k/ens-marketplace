import './App.css';
import { Navbar } from "./Navbar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './Home';
import { BuyensPage } from './BuyensPage';
import ListEnsPage from './ListEnsPage';
import { About } from './About';
import { Footer } from './Footer';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buyens' element={<BuyensPage/>} />
        <Route path='/listens' element={<ListEnsPage/>} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
