import React from 'react'
import dayjs from 'dayjs'


export default function TrTipos({ index, tipo }) {
   return (
       <tr>
           <th scope="row">{index + 1}</th>
           <td>{tipo.nombre}</td>
           <td>{tipo.descripcion}</td>
           <td>{dayjs(tipo.fechaCreacion).format('DD/MM/YYYY')}</td>
           <td>{tipo.estado ? 'Activo' : 'Inactivo'}</td>
           <td><button type="button" className="btn btn-outline-primary">Editar</button></td>
       </tr>
   )
}
