// EJERCICIOS 2.12 Y 2.13, Y 2.14

import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Campo from './components/Campo'
import Mensaje from './components/Mensaje'
import Lista from './components/Lista'
import Detalle from './components/Detalle'

const App = () => {
    console.log('Empezo')
    const [paises, setPaises] = useState([])
    const [newFilter, setNewFilter] = useState('')
    const [filtrado, setFiltrado] = useState([])
    
    let params = {
        access_key: process.env.REACT_APP_API_KEY,
        query: ''
    }

    
    useEffect(() => {
        console.log('effect')
        axios
            .get('https://restcountries.eu/rest/v2/all').then(response => {
                console.log('promise fulfilled')
                setPaises(response.data)
            })
    },[])

    console.log('Abajo esta paises')
    console.log(paises)

    const handleNewFilter = (event) => {
        console.log(event.target.value)
        setNewFilter(event.target.value)
        if (event.target.value === '') {
            setFiltrado([])
        }
        else {
            /*console.log(paises)
            console.log(paises.map(pais => pais.name))
            console.log(paises.filter(pais => pais.name.toLowerCase().includes(event.target.value.toLowerCase())))*/
            setFiltrado(paises.filter(pais => pais.name.toLowerCase().includes(event.target.value.toLowerCase())))
        }
    }

    const showCountry = (event) => {
        event.preventDefault()
        setFiltrado([filtrado.find(pais => pais.name === event.target.value)])
    }


    
    console.log('Justo antes de return')
    return (
        <div>
            <Campo valor={newFilter} cambio={handleNewFilter} descrip="Find countries: " />
            <Mensaje filtrado={filtrado} />
            <Lista filtrado={filtrado} click={showCountry} />
            <Detalle filtrado={filtrado} params={params} />
        </div>
    );
}

export default App;

