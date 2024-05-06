import React from 'react'
import { useNavigate } from "react-router-dom";



export default function Navbar() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `carrinho`; 
    navigate(path);
  }
  if (1==1){
    return (
      <>
 
 
         <div className="navbar bg-base-100 ">
       <div className="flex-1">
         <a href="/" className="btn btn-ghost text-xl">Biblioteca</a>
       </div>
       <div className="flex-none">
         <div className="dropdown dropdown-end">
           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
             <div className="indicator">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
               <span className="badge badge-sm indicator-item">8</span>
             </div>
           </div>
           <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
             <div className="card-body">
               <span className="font-bold text-lg">8 livros no carrinho</span>
               <div className="card-actions">
                 <button onClick={routeChange} className="btn btn-primary btn-block">Ver carrinho</button>
               </div>
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
            
             
             <li><a href="/login" >Logout</a></li>
           </ul>
         </div>
       </div>
     </div>
      </>
     );
   }
   else if (1==2){
    return (
      <>
 
 <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a href="/" className="btn btn-ghost text-xl">Biblioteca</a>
  </div>
 
  <div className="navbar-end">
    <a href="/login" className="btn mr-2">Login</a>
    <a href="/registo" className="btn">Registo</a>
  </div>
</div>
      </>
     );
   
   }
  
    return (
     <>

     </>
    );
  }