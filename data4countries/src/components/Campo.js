import React from 'react'

const Campo = (props) => {
    console.log('Campo')
    return (
        <div>
            {props.descrip}<input value={props.valor} onChange={props.cambio} />
        </div>
    );
}

export default Campo