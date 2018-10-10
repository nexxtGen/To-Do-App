import React from 'react';

const Title = (props) => 
    <div className="title">
        <h1>React ToDo App</h1>   
        <h3>Items: {props.data.length}</h3>     
    </div>

export default Title;