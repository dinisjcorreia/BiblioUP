import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import CarrinhoConteudo from './carrinho/CarrinhoConteudo';

export default function Carrinho() {
    return (
     <>
      <Navbar />
     <CarrinhoConteudo />
      <Footer />
     </>
    );
  }