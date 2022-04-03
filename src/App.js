import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Coins from './Components/Coins/Coins';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Notfound from './Components/NotFound/Notfound';
import OneCoinDetails from './Components/OneCoinDetails/OneCoinDetails';

function App() {
  return (
    <div className='bg-slate-100'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/coins' element={<Coins />}></Route>
        <Route path='/coins/:id' element={<OneCoinDetails />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
