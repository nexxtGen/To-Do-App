import React from 'react';
import style from './Todo.css'

const Todo = props => (
    <li onClick={() => props.removeTodo(props.id)} className={style.item}>
        {props.text}
    </li>
)

export default Todo;