import React from 'react';

const Total = (props) => {

    return (
        <div>
            Total of {props.partes.reduce((sum, parte) => sum + parte.exercises, 0)} exercises
        </div>
    )
}

export default Total;