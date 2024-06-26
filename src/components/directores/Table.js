import React from 'react'
import TrDirector from './TrDirector'

export default function Table({ directores = [] }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">FechaCreacion</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    directores.map((director, index) => {
                        return (
                            <TrDirector director={director} key={index + 1} index={index} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}
