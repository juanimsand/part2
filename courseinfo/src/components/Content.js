import React from 'react';
import Part from './Part'

const Content = (props) => {
    return (
        <div>
            {props.partes.map((parte) =>
                <Part key={parte.id} nombre={parte.name} ejercicios={parte.exercises} />
                )}
        </div>
    );
}


export default Content;