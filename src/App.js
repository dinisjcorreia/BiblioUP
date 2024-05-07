import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import PaginaInicial from './PaginaInicial';
import Carrinho from './Carrinho';



/* const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
    </ul>
  </nav>
);
 */

const Main = () => (
  <Routes>
     <Route exact path='/' element={<PaginaInicial />}></Route>
     <Route exact path='/carrinho' element={<Carrinho/>}></Route>
  </Routes>
);

const App = () => (
  <div className='app'>
    {/* <Navigation /> */}
    <Main />
  </div>
);

export default App;







