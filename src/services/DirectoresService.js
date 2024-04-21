import { axiosConfig } from '../configurations/axiosConfig'

const obtenerDirectores = (estado = true) => {
    return axiosConfig.get('directores?estado='+estado, {
        headers: {
        'Content-Type' : 'application/json'
        }
    })
}

const crearDirectores = (data = {} ) => {
    return axiosConfig.post('directores', data, {
        headers: {
        'Content-Type' : 'application/json'
        }
    })
}

const actualizarDirectores = (id, data = {} ) => {
    return axiosConfig.put('directores/' +id, data, {
        headers: {
        'Content-Type' : 'application/json'
        }
    })
}

const borrarDirectores = id => {
    return axiosConfig.delete('directores/' +id, {}, {
        headers: {
        'Content-Type' : 'application/json'
        }
    })
}

export{
    obtenerDirectores,
    crearDirectores,
    actualizarDirectores,
    borrarDirectores
}