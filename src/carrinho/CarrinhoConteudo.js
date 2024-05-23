import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function CarrinhoConteudo() {
  const [messages, setMessages] = useState([]);
  const { user } = useAuth0();
  
  useEffect(() => {
    
      fetch("http://localhost:8000/carrinho?iduser="+user.sub.split('|')[1])
      .then((res) => res.json())
      .then((data) => setMessages(data.message));

    
  }, []);

    if (messages.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-5">O seu carrinho está vazio!</h1>
          </div>
        </div>
      );
    }
    return (
     <>
    <div className="overflow-x-auto mb-5">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Título</th>
        <th>Autor</th>
        <th>Editora</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

    {messages.map(message => (
            
            <tr>
        <th>
        
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={message.img} alt="Livro" />
              </div>
            </div>
            <div>
              <div className="font-bold">{message.titulo}</div>
            
            </div>
          </div>
        </td>
        <td>
        {message.id_autor}
          
          
        </td>
        <td>{message.id_editora}</td>
        <th>
        <button className="btn btn-ghost btn-xs" onClick={() => window.location.href='http://localhost:8000/removeCarrinho?idlivro='+message.id+'&iduser='+user.sub.split('|')[1]}>Remover</button>
        </th>
      </tr>
        ))}

   


    </tbody>
    
   
  </table>
</div>

<div className="flex justify-end m-5">
  <button className="btn btn-outline" onClick={()=>document.getElementById('my_modal_5').showModal()}>Confirmar Requisição</button>
</div>

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Requisição</h3>

    {messages.map(message => (
      <>
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12 mt-3">
            <img src={message.img} alt="Livro" />
          </div>
        </div>
        <div>
          <div className="font-bold">{message.titulo}</div>
          <div className="text-sm">{message.id_autor}</div>
        </div>
        </div>
      </>
       
        ))}

    <div className="modal-action">
      <form method="dialog">
        <button className="btn" onClick={() => window.location.href='http://localhost:8000/concluirRequisicao?iduser='+user.sub.split('|')[1]+'&nome='+user.name}>Requisitar</button>
      </form>
    </div>
  </div>
</dialog>


     </>
    );
  }
