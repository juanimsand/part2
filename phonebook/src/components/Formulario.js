import React from 'react'
import Campo from './Campo'

const Formulario = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <Campo valor={props.dato1} cambio={props.cambio1} descrip="name: " />
            <Campo valor={props.dato2} cambio={props.cambio2} descrip="number: " />
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
}

export default Formulario