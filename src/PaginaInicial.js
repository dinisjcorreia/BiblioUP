import React from 'react'
import Livros from './index/Livros';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PaginaInicial() {
    return (
     <>
      <Navbar />
      <Livros />
      <Footer />
     </>
    );
  }