import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import PaginaInicial from './PaginaInicial';
import Carrinho from './Carrinho';
import Sobrenos from './Sobrenos';


const Main = () => (
  <Routes>
     <Route exact path='/' element={<PaginaInicial />}></Route>
     <Route exact path='/home' element={<PaginaInicial />}></Route>
     <Route exact path='/carrinho' element={<Carrinho/>}></Route>
     <Route exact path='/sobrenos' element={<Sobrenos/>}></Route>
     <Route exact path='/search/:modulo/:sort?' element={<PaginaInicial/>}></Route>

  </Routes>
);

const App = () => (
  <div className='app'>
    <Main />
  </div>
);

export default App;







