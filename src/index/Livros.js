import React, { useState, useEffect } from "react";

export default function Livros() {

    const [messages, setMessages] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:8000/livros")
        .then((res) => res.json())
        .then((data) => setMessages(data.message));
    }, []);

    return (
     <>
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
            {messages.map(message => (
            
                <div className="card w-1/4 bg-base-100 shadow-xl">
                <figure><img src={message.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{message.titulo}</h2>
                    <p>{message.descricao}</p>
                    <div className="card-actions justify-end">
                    <button onClick={() => addCarinho(message.id)} className="btn btn-primary">Adicionar ao carrinho</button>
                    </div>
                </div>
                </div> 
            ))}
        </div>
     </>
    );
  }

  function addCarinho(id){
    window.location.replace('http://localhost:8000/addCarrinho?idlivro='+id+'&iduser=1');
  }