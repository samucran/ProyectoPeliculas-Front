import React from 'react'
import TrProductoras from './TrProductora'


export default function Table({ productoras = [] }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Slogan</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">FechaCreacion</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    productoras.map((productora, index) => {
                        return (
                            <TrProductoras productora={productora} key={index + 1} index={index} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}
