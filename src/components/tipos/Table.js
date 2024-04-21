import React from 'react'
import TrTipo from './TrTipo'


export default function Table({ tipos = [] }) {
   return (
       <table className="table">
           <thead>
               <tr>
                   <th scope="col">#</th>
                   <th scope="col">Nombre</th>
                   <th scope="col">Descripcion</th>
                   <th scope="col">FechaCreacion</th>
                   <th scope="col">Estado</th>
                   <th scope="col">Acciones</th>
               </tr>
           </thead>
           <tbody>
               {
                   tipos.map((tipo, index) => {
                       return (
                           <TrTipo tipo={tipo} key={index + 1} index={index} />
                       )
                   })
               }
           </tbody>
       </table>
   )
}
