import React from 'react'
import Clima from './Clima'


const Detalle = (props) => {
    console.log('Detalle')

    if (props.filtrado.length === 1) {
        
        return (
            <div>
                <h1>{props.filtrado[0].name}</h1>
                Capital: {props.filtrado[0].capital} <br></br>
                Population: {props.filtrado[0].population}
                <h1>Idiomas</h1>
                {props.filtrado[0].languages.map(lenguaje => <li key={lenguaje.name}>{lenguaje.name}</li>)}
                <img src={props.filtrado[0].flag} alt="Flag" width={180} height={110} />
                <Clima capital={props.filtrado[0].capital} params={props.params} />
            </div>
        );
    }
    else {
        return (<div></div>);
    }
}

export default Detalle