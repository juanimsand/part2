import React from 'react'

const Datos = (props) => {
    return (
        props.personas.map(persona => <div key={persona.id}>{persona.name} {persona.number}<button
            onClick={props.elimina} id={persona.name} value={persona.id}>Eliminar</button></div>)
    );
}

export default Datos