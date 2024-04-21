import React from 'react'
import dayjs from 'dayjs'

export default function TrDirectores({ index, director }) {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{director.nombre}</td>
            <td>{dayjs(director.fechaCreacion).format('DD/MM/YYYY')}</td>
            <td>{director.estado ? 'Activo' : 'Inactivo'}</td>
            <td><button type="button" className="btn btn-outline-primary">Editar</button></td>
        </tr>
    )
}
