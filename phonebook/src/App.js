// ESTA RESUELTO 2.6, 2.7 Y 2.8, Y 2.9, Y OBVIO EL 2.10, Y EL 2.11
// TAMBIEN EL 2.15, 2.16, 2.17 Y 2.18
// TAMBIEN 2.19 Y 2.20

import React, { useState, useEffect } from 'react'
//import axios from 'axios'
import Header from './components/Header'
import Campo from './components/Campo'
import Datos from './components/Datos'
import Formulario from './components/Formulario'
import Mensaje from './components/Mensaje'

import personsServices from './services/persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')
    const [filtrado, setFiltrado] = useState([])
    const [mensaje, setMensaje] = useState(null)
    const [msjEstado, setMsjEstado] = useState(null)

    useEffect(() => {
        console.log('effect')
        personsServices
            .getPersons().then(personsInicial => {
                console.log('promise fulfilled')
                setPersons(personsInicial)
            })
            .catch(error => {
                alert('Oops! We are in prescence of an error 1!')
            })
    }, [])


    const addPersona = (event) => {
        event.preventDefault()
        console.log('addPersona')
        const cargaDatos = { name: newName, number: newNumber }
        if (persons.some(person => person.name === newName)) {
            if (window.confirm(`${newName} is already added to the phonebook, do you want to update the old number?`)) {
                const persupdate = persons.find(elemento => elemento.name === newName)
                
                personsServices
                    .update(persupdate.id, cargaDatos).then(returnedDatos => {
                        console.log('promise fulfilled')
                        setPersons(persons.map(persona => persona.id !== returnedDatos.id ? persona : returnedDatos))
                        setMsjEstado('p')
                        setMensaje(`The number of ${newName} has been updated`)
                        setTimeout(() => {
                            setMensaje(null)
                            setMsjEstado(null)
                        }, 4000)
                    })
                    .catch(error => {
                        setMsjEstado('n')
                        setMensaje(`${newName} cannot be updated, seems its was deleted`)
                        setTimeout(() => {
                            setMensaje(null)
                            setMsjEstado(null)
                            setPersons(persons.filter(person => person.id !== persupdate.id))
                        }, 4000)
                        //alert('Oops! We are in prescence of an error!')
                    })
                
            }
        }
        else {
            personsServices
                .create(cargaDatos).then(returnedPersona => {
                    console.log('promise fulfilled')
                    setPersons(persons.concat(returnedPersona))
                    setMsjEstado('p')
                    setMensaje(`${newName} has been added to the phonebook`)
                    setTimeout(() => {
                        setMensaje(null)
                        setMsjEstado(null)
                    }, 4000)
                })
                .catch(error => {
                    alert('Oops! We are in prescence of an error!')
                })
            
        }
        setNewName('')
        setNewNumber('')
    }

    const handleNewName = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
        // Hago un alert si el newName esta en persons
        if (persons.some(person => person.name === event.target.value)) {
            window.alert(`${event.target.value} is already added to the phonebook`)
        }
    }

    const handleNewNumber = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
        // Hago un alert si el newName esta en persons
        if (persons.some(person => person.number === event.target.value)) {
            window.alert(`The number ${event.target.value} is already added to the phonebook`)
        }
    }

    const handleNewFilter = (event) => {
        console.log(event.target.value)
        setNewFilter(event.target.value)
        if (event.target.value === '') setFiltrado([])
        else setFiltrado(persons.filter( person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }

    const handleDelete = (event) => {
        event.preventDefault()
        console.log('handleDelete')
        const id = parseInt(event.target.value)
        if (window.confirm(`Are you sure you want delete ${event.target.id}`))
        personsServices
            .eliminar(event.target.value).then(returnedPersona => {
                console.log('promise fulfilled')
                setPersons(persons.filter(persona => (persona.id !== id)))
            })
            .catch(error => {
                alert('Oops! We are in prescence of an error!')
            })  
    }


    return (
        <div>
            <Header title="Phonebook" />
            <Campo valor={newFilter} cambio={handleNewFilter} descrip="filter shown with: "/>
            <Header title="Add New" />
            <Formulario onSubmit={addPersona} dato1={newName} cambio1={handleNewName}
                dato2={newNumber} cambio2={handleNewNumber}/>
            <Header title="Filter person" />
            <Datos personas={filtrado} />
            <Header title="Persons of phonebook" />
            <Mensaje msj={mensaje} msjestado={msjEstado} />
            <Datos personas={persons} elimina={handleDelete}/>
    </div>
    )
}

export default App
