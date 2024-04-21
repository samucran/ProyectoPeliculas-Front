import { axiosConfig } from '../configurations/axiosConfig'

const obtenerProductoras = (estado = true) => {
    return axiosConfig.get('productoras?estado='+estado, {
        headers: {
        'Content-Type' : 'application/json'
        }
    })
}

const crearProductoras = (data = {} ) => {
    return axiosConfig.post('productoras', data, {
        headers: {
        'Content-Type' : 'application/json'
        }
    })
}

const actualizarProductoras = (id, data = {} ) => {
    return axiosConfig.put('productoras/' +id, data, {
        headers: {
        'Content-Type' : 'application/json'
        }
    })
}

const borrarProductoras = id => {
    return axiosConfig.delete('productoras/' +id, {}, {
        headers: {
        'Content-Type' : 'application/json'
        }
    })
}

export{
    obtenerProductoras,
    crearProductoras,
    actualizarProductoras,
    borrarProductoras
}