import React from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import Currency from './pages/Currency';
import Converter from './pages/Converter';
import Header from './components/Header.jsx'

function App() {
  return (        
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Converter/>}/>
        <Route path='/currency' element={<Currency/>}/>
      </Routes>
    </div>
  );
}

export default App;
