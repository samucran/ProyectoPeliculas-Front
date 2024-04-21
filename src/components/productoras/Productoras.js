import React, { useEffect, useState } from 'react'
import { crearProductoras, obtenerProductoras } from '../../services/ProductorasService'
import Table from './Table'
import Error from './Error'
import Toggle from './Toggle'

export default function Productoras() {

  const [productoras, setProductoras] = useState([])
  const [estado, setEstado] = useState(false)
  const [error, setError] = useState(false)
  const [productora, setProductora] = useState({
    nombre: '',
    slogan: '',
    descripcion: '',
    estado: true
  })

  useEffect(() => {
    obtenerTodos()
  }, [estado])

  const obtenerTodos = async () => {
    try {
      const { data } = await obtenerProductoras(estado)
      setProductoras(data)
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
    setProductora({
      ...productora,
      [e.target.name]: e.target.value
    })
  }

  const guardar = async () => {
    try {
      const resp = await crearProductoras(productora)
      obtenerTodos()
      setProductora({
        nombre: '',
        slogan: '',
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
      {error ? <Error /> : <Table productoras={productoras} />}


      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Agregar Productoras</button>


      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva productora</h1>
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
                    value={productora.nombre}
                    onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">Slogan:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="slogan"
                    value={productora.slogan}
                    onChange={handleChange}>
                  </textarea>
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">Descripcion:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="descripcion"
                    value={productora.descripcion}
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
                  disabled={productora.nombre.length == 0}>
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

