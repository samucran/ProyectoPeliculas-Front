import { axiosConfig } from '../configurations/axiosConfig'

const obtenerGeneros = (estado = true) => {
    return axiosConfig.get('generos?estado='+estado, {
        headers: {
        'Content-Type' : 'application/json'
        }
    })
}

const crearGeneros = (data = {} ) => {
    return axiosConfig.post('generos', data, {
        headers: {
        'Content-Type' : 'application/json'
        }
    })
}

const actualizarGeneros = (id, data = {} ) => {
    return axiosConfig.put('generos/' +id, data, {
        headers: {
        'Content-Type' : 'application/json'
        }
    })
}

const borrarGeneros = id => {
    return axiosConfig.delete('generos/' +id, {}, {
        headers: {
        'Content-Type' : 'application/json'
        }
    })
}

export{
    obtenerGeneros,
    crearGeneros,
    actualizarGeneros,
    borrarGeneros
}