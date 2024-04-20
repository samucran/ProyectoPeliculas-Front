import React from 'react'
import TrGenero from './TrGenero'

export default function Table({ generos = [] }) {
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
                    generos.map((genero, index) => {
                        return (
                            <TrGenero genero={genero} key={index + 1} index={index} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}
