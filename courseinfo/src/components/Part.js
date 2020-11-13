import React from 'react';

const Part = (props) => {
    return (
        <div>
            <p>
                {props.nombre} {props.ejercicios}
            </p>
        </div>
    );
}

export default Part;