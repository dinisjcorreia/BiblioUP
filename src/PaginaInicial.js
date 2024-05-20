import React from 'react'
import Livros from './index/Livros';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAuth0 } from "@auth0/auth0-react";


export default function PaginaInicial() {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
    return;
  }

    return (
     <>
      <Navbar />
      <Livros />
      <Footer />
     </>
    );
  }