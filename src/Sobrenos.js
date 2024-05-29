import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import SobrenosConteudo from './sobrenos/SobrenosConteudo';
import { useAuth0 } from "@auth0/auth0-react";

export default function Sobrenos() {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
  }
    return (
     <>
      <Navbar />
     <SobrenosConteudo />
      <Footer />
     </>
    );
  }