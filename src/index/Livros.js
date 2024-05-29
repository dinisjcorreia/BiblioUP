import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Livros() {
  const { user } = useAuth0();

    const [messages, setMessages] = useState([]);
    const {modulo, sort} = useParams();
    let link = "http://localhost:8000/livros";
    if (modulo != undefined && sort == undefined) {
      link = "http://localhost:8000/livros?pesquisa=" + modulo;
    } else if (modulo != undefined && sort!= undefined) {
      link = "http://localhost:8000/livros?pesquisa=" + modulo+'&sort='+sort;
    }

    console.log(link);
    useEffect(() => {
      fetch(link)
        .then((res) => res.json())
        .then((data) => setMessages(data.message));
    }, []);

    const clearFilters = () => {
     
      window.location.replace('/home');
    };

  if (messages.length === 0) {
    return (<>

        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-5">Nenhum livro encontrado!</h1>
          </div>
          <button className="btn mb-5" onClick={clearFilters}>Limpar filtros</button>
        </div>

    </>)
  }

  else {
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
                     <button onClick={() => window.location.replace('http://localhost:8000/addCarrinho?idlivro='+message.id+'&iduser='+user.sub.split('|')[1])} className="btn btn-primary">Adicionar ao carrinho</button>
                     </div>
                 </div>
                 </div> 
             ))}
         </div>
      </>
     );
  }
    return;
    
  }

 