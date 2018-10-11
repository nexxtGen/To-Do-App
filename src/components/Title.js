import React from 'react';
import style from './Title.css';

const Title = (props) => 
    <div className={style.title}>
        <h2>React ToDo App</h2>   
        <h4>Items: {props.data.length}</h4>     
    </div>

export default Title;