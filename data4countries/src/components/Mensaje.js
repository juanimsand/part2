import React from 'react'

const Mensaje = (props) => {
    console.log('Mensaje')
    if (props.filtrado.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        );
    }
    else {
        return (<div></div>);
    }
}

export default Mensaje