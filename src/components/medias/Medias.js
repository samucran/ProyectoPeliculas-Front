import React, { useEffect, useState } from 'react'
import { crearMedias, obtenerMedias } from '../../services/MediasService'
import Table from './Table'
import Error from './Error'
import Toggle from './Toggle'

export default function Medias() {

  const [medias, setMedias] = useState([])
  const [estado, setEstado] = useState(false)
  const [error, setError] = useState(false)
  const [media, setMedia] = useState({
    serial: '',
    titulo: '',
    sinopsis: '',
    url: '',
    imagen: '',
    fechaEstreno: '',
    genero: '',
    director: '',
    productora: '',
    tipo: '',
    estado: true
  })

  useEffect(() => {
    obtenerTodos()
  }, [estado])

  const obtenerTodos = async () => {
    try {
      const { data } = await obtenerMedias(estado)
      setMedias(data)
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
    setMedia({
      ...media,
      [e.target.name]: e.target.value
    })
  }

  const guardar = async () => {
    try {
      const resp = await crearMedias(media)
      obtenerTodos()
      setMedia({
        serial: '',
        titulo: '',
        sinopsis: '',
        url: '',
        imagen: '',
        fechaEstreno: '',
        genero: '',
        director: '',
        productora: '',
        tipo: '',
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
      {error ? <Error /> : <Table medias={medias} />}

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Agregar Medias</button>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva media</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={guardar}>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">Serial:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    name="serial"
                    value={media.serial}
                    onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">Titulo:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="titulo"
                    value={media.titulo}
                    onChange={handleChange}>
                  </textarea>
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">Sinopsis:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="sinopsis"
                    value={media.sinopsis}
                    onChange={handleChange}>
                  </textarea>
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">Url:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="url"
                    value={media.url}
                    onChange={handleChange}>
                  </textarea>
                </div>

                <div className="mb-3">
                  <label for="message-text" className="col-form-label">Imagen:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="imagen"
                    value={media.imagen}
                    onChange={handleChange}>
                  </textarea>
                </div>

                <div className="mb-3">
                  <label for="message-text" className="col-form-label">Fecha Estreno:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="fechaEstreno"
                    value={media.fechaEstreno}
                    onChange={handleChange}>
                  </textarea>
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">Genero:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="genero"
                    value={media.genero}
                    onChange={handleChange}>
                  </textarea>
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">Director:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="director"
                    value={media.director}
                    onChange={handleChange}>
                  </textarea>
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">Productora:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="productora"
                    value={media.productora}
                    onChange={handleChange}>
                  </textarea>
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">Tipo:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="tipo"
                    value={media.tipo}
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
                  disabled={media.serial.length == 0}>
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