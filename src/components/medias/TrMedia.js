import React from 'react'
import dayjs from 'dayjs'

export default function TrMedias({ index, media }) {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{media.serial}</td>
            <td>{media.titulo}</td>
            <td>{media.sinopsis}</td>
            <td>{media.url}</td>
            <td>{media.imagen}</td>
            <td>{dayjs(media.fechaCreacion).format('DD/MM/YYYY')}</td>
            <td>{media.fechaEstreno}</td>
            <td>{media.genero}</td>
            <td>{media.director}</td>
            <td>{media.productora}</td>
            <td>{media.tipo}</td>
            <td>{media.estado ? 'Activo' : 'Inactivo'}</td>
            <td><button type="button" className="btn btn-outline-primary">Editar</button></td>
        </tr>
    )
}
