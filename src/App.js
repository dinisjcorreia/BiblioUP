import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import PaginaInicial from './PaginaInicial';
import Carrinho from './Carrinho';


const Main = () => (
  <Routes>
     <Route exact path='/' element={<PaginaInicial />}></Route>
     <Route exact path='/carrinho' element={<Carrinho/>}></Route>
  </Routes>
);

const App = () => (
  <div className='app'>
    <Main />
  </div>
);

export default App;







