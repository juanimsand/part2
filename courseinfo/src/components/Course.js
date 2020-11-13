import React from 'react';
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {
    return (
        <div>
                <Header titulo={props.course.name} />
                <Content partes={props.course.parts} />
                <Total partes={props.course.parts} />
       </div>
    )
}

export default Course;
