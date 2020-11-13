import React from 'react'

const Lista = (props) => {
    console.log('Lista')
    if ((props.filtrado.length > 1) && (props.filtrado.length < 11)) {
        return (
            props.filtrado.map(pais => <div key={pais.name}>{pais.name}
                <button onClick={props.click} value={pais.name}>Show</button>
            </div>)
        );
    }
    else {
        return (<div></div>);
    }
}

export default Lista