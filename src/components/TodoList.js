import React from 'react';
import Todo from './Todo';
import style from './TodoList.css'
/*
const filteredData = {this.props.data.filter(item => {
    return item.text.toLowerCase().indexOf(props.filter.toLowerCase()) > -1;
})}
*/

const TodoList = props => {
    
    return (
        <ol className={style.TodoList}>            
            {props.data.map((item) => { 
                    return (
                        <Todo key={item.id} id={item.id} removeTodo={props.remove} text={item.text}/>
                    );                
            })}
        </ol> 
    );   
}

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