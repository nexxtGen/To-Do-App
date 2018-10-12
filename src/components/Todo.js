import React from 'react';
import style from './Todo.css'

const Todo = props => (
    <li id={props.item.id} active={props.item.active}  className={style.item}>  
        <div className={style.div1}>
            <span onClick={() => props.toggleClass(props.item.id)} className={props.item.active ? style.active : style.itemSpan }>{props.item.text}</span>
            <p className={style.born}>{' --Created: ' + props.item.bornDate} <span className={style.date}> {props.item.active ? '--Done: '+props.item.date : null}</span> </p>
            
        </div>
        <div className={style.div2}>
            <button onClick={() => props.removeTodo(props.item.id)}>x</button> 
        </div>      
        
            
        
        
        
    </li>
)

export default Todo;
/*
<input type="checkbox" id="done" />
<label for="done" className={style.itemText}>{props.text}</label>
<button onClick={() => props.removeTodo(props.id)}>x</button>
*/
