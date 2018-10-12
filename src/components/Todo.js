import React from 'react';
import style from './Todo.css'

const Todo = props => (
    <li  className={props.active ? style.active : style.item} onClick={props.toggleClass}>        
        <p>{props.text}</p>        
    </li>
)

export default Todo;
/*
<input type="checkbox" id="done" />
<label for="done" className={style.itemText}>{props.text}</label>
<button onClick={() => props.removeTodo(props.id)}>x</button>
*/
