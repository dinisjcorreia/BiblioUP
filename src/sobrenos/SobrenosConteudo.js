import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function CarrinhoConteudo() {
  const [messages, setMessages] = useState([]);
  const { user } = useAuth0();
  

   
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-5">Sobre nós</h1>
             
             <p className="mb-5 ml-11 mr-11">  O projeto tem como objetivo principal a implementação de um sistema eficaz destinado à gestão do stock de livros numa biblioteca, com o objetivo de melhorar a experiência dos clientes e dos trabalhadores durante as suas pesquisas por livros. Reconhecemos a importância da gestão eficiente e eficaz do inventário, destacando o seu papel crucial na eficiência operacional e na satisfação dos clientes.</p>
<p className="mb-5 ml-11 mr-11">
A nossa aplicação permite uma localização rápida e eficaz dos livros por parte dos trabalhadores da biblioteca. A implementação de um sistema de gestão de stock proporcionará diversos benefícios, como a redução do tempo de espera do cliente e a otimização dos recursos disponíveis.</p>
<p className="mb-11 ml-11 mr-11">A introdução desta ferramenta possibilitará um controle mais preciso do stock, evitando perdas e assegurando a disponibilidade adequada de exemplares.</p>
          
          
           
          
          </div>
        </div>
      );
    
    
  }