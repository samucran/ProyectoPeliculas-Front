import { axiosConfig } from '../configurations/axiosConfig'


const obtenerMedias = (estado = true) => {
    return axiosConfig.get('medias?estado='+estado, {
        headers: {
        'Content-Type' : 'application/json'
        }
    })
}


const crearMedias = (data = {} ) => {
   return axiosConfig.post('medias', data, {
       headers: {
       'Content-Type' : 'application/json'
       }
   })
}


const actualizarMedias = (id, data = {} ) => {
   return axiosConfig.put('medias/' +id, data, {
       headers: {
       'Content-Type' : 'application/json'
       }
   })
}


const borrarMedias = id => {
   return axiosConfig.delete('medias/' +id, {}, {
       headers: {
       'Content-Type' : 'application/json'
       }
   })
}


export{
   obtenerMedias,
   crearMedias,
   actualizarMedias,
   borrarMedias
}
