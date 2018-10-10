import React from 'react';
import Todo from './Todo';
import style from './TodoList.css'

const TodoList = props => (
        <ol className={style.TodoList}>
            <h3>Items: {props.data.length}</h3>
            {props.data.map((item) =>
                <Todo key={item.id} id={item.id} removeTodo={props.remove} text={item.text}/>
            )}
        </ol> 
);   

/* wersja trochę dłuzsza
const TodoList = (props) => {
    return (
        <ol>
            {props.data.map((item) =>
                <li key={item.id}>{item.text}</li>
            )}
        </ol>
    )
}
 */
export default TodoList;