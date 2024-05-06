import React from 'react'

export default function CarrinhoConteudo() {
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
      {/* row 1 */}
      <tr>
        <th>
        
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
            
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          
          
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">Remover</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
        
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          
        </td>
        <td>Red</td>
        <th>
          <button className="btn btn-ghost btn-xs">Remover</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
         
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          
        </td>
        <td>Crimson</td>
        <th>
          <button className="btn btn-ghost btn-xs">Remover</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
         
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
         
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-ghost btn-xs">Remover</button>
        </th>
      </tr>
    </tbody>
    
   
  </table>
</div>

<div className="flex justify-end m-5">
  <button className="btn btn-outline">Confirmar Requisição</button>
</div>


     </>
    );
  }