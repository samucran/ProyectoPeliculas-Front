import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                Peliculas IUD
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        
                        <NavLink to='/' className="nav-link">
                            Generos
                        </NavLink>

                        <NavLink to='/directores' className="nav-link">
                            Directores
                        </NavLink>

                        <NavLink to='/productoras' className="nav-link">
                            Productoras
                        </NavLink>

                        <NavLink to='/tipos' className="nav-link">
                            Tipos
                        </NavLink>

                        <NavLink to='/medias' className="nav-link">
                            Medias
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
