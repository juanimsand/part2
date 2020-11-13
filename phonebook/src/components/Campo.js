import React from 'react'

const Campo = (props) => {
    return (
        <div>
            {props.descrip}<input value={props.valor} onChange={props.cambio} />
        </div>
    );
}

export default Campo