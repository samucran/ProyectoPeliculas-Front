import React, { useEffect, useState } from 'react'
import { crearTipos, obtenerTipos } from '../../services/TiposService'
import Table from './Table'
import Error from './Error'
import Toggle from './Toggle'




export default function Tipos() {


  const [tipos, setTipos] = useState([])
  const [estado, setEstado] = useState(false)
  const [error, setError] = useState(false)
  const [tipo, setTipo] = useState({
    nombre: '',
    descripcion: '',
    estado: true
  })


  useEffect(() => {
    obtenerTodos()
  }, [estado])


  const obtenerTodos = async () => {
    try {
      const { data } = await obtenerTipos(estado)
      setTipos(data)
      if (error) {
        setError(false)
      }
    } catch (e) {
      console.error(e)
      setError(true)
    }
  }
  const cambiarEstado = () => {
    setEstado(!estado)
  }


  const handleChange = e => {
    setTipo({
      ...tipo,
      [e.target.name]: e.target.value
    })
  }


  const guardar = async () => {
    try {
      const resp = await crearTipos(tipo)
      obtenerTodos()
      setTipo({
        nombre: '',
        descripcion: '',
        estado: true
      })
      setEstado(true)
      console.log(resp)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <Toggle cambiarEstado={cambiarEstado} estado={estado} />
      {error ? <Error /> : <Table tipos={tipos} />}


      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Agregar tipo</button>


      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo tipo</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={guardar}>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">Nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    name="nombre"
                    value={tipo.nombre}
                    onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">Descripcion:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="descripcion"
                    value={tipo.descripcion}
                    onChange={handleChange}>
                  </textarea>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal">
                  Cerrar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={tipo.nombre.length == 0}>
                  Crear
                </button>
              </form>
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

