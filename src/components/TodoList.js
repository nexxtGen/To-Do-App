import React from 'react';
import Todo from './Todo';
import style from './TodoList.css'

const TodoList = props => (
        <ol className={style.TodoList}>

            {props.data.map((item) => {
                if (item.text.toLowerCase().indexOf(props.filter.toLowerCase()) > -1) {
                    return (
                        <Todo key={item.id} id={item.id} removeTodo={props.remove} text={item.text}/>
                    );
                }
            })}
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