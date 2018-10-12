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
                        <p className={props.active ? style.active : style.item } onClick={props.toggleClass} >
                            <Todo key={item.id} id={item.id} removeTodo={props.remove} text={item.text} />
                        </p>
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