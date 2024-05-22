import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { user, logout } = useAuth0();

  let navigate = useNavigate(); 
  let location = useLocation();
  const routeChange = () =>{ 
    let path = `carrinho`; 
    if (location.pathname != '/carrinho'){
      navigate(path);
    }
   
  }
 
  
 
    return (
      <>
      
 
 
         <div className="navbar bg-base-100 ">
       <div className="flex-1">
         <a href="/" className="btn btn-ghost text-xl">BiblioUP</a>
       </div>
       <div className="flex-none">
       {/* <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow mr-5" placeholder="Pesquisa" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
        </label> */} 
         <div className="dropdown dropdown-end">
           <div tabIndex={0} role="button" onClick={routeChange} className="btn btn-ghost btn-circle">
             <div className="indicator">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              
             </div>
           </div>
         
         </div>
         <div className="dropdown dropdown-end">
           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
             <div className="w-10 rounded-full">
               <img alt="Profile Picture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png" />
             </div>
           </div>
           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            
           <li>{user.nickname}</li>
             <li><a onClick={(e) => {e.preventDefault(); logout();}}>Logout</a></li>
           </ul>
         </div>
       </div>
     </div>
      </>
     );
  

  
    
   }
   
  
  
  