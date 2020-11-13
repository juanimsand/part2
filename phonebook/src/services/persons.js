import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getPersons = () => {
    const request = axios.get(`${baseUrl}`)
    return request.then(response => response.data)
}

const create = cargaDatos => {
    const request = axios.post(baseUrl, cargaDatos)
    return request.then(response => response.data)
}

const update = (id, cargaDatos) => {
    const request = axios.put(`${baseUrl}/${id}`, cargaDatos)
    return request.then(response => response.data)
}

const eliminar = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getPersons, create, update, eliminar}