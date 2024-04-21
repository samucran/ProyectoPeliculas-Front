import { axiosConfig } from '../configurations/axiosConfig'

const obtenerTipos = (estado = true) => {
   return axiosConfig.get('tipos?estado='+estado, {
       headers: {
       'Content-Type' : 'application/json'
       }
   })
}

const crearTipos = (data = {} ) => {
   return axiosConfig.post('tipos', data, {
       headers: {
       'Content-Type' : 'application/json'
       }
   })
}

const actualizarTipos = (id, data = {} ) => {
   return axiosConfig.put('tipos/' +id, data, {
       headers: {
       'Content-Type' : 'application/json'
       }
   })
}

const borrarTipos = id => {
   return axiosConfig.delete('tipos/' +id, {}, {
       headers: {
       'Content-Type' : 'application/json'
       }
   })
}

export{
   obtenerTipos,
   crearTipos,
   actualizarTipos,
   borrarTipos
}
