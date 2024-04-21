import React from 'react'
import TrMedia from './TrMedia'


export default function Table({ medias = [] }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Serial</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Sinopsis</th>
                    <th scope="col">Url</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">fechaCreacion</th>
                    <th scope="col">fechaEstreno</th>
                    <th scope="col">Genero</th>
                    <th scope="col">Director</th>
                    <th scope="col">Productora</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    medias.map((media, index) => {
                        return (
                            <TrMedia media={media} key={index + 1} index={index} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}
