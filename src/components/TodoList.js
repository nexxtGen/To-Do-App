import React from 'react';
import Todo from './Todo';
import style from './TodoList.css'

const TodoList = props => {
    
    return (
        <ul className={style.TodoList}>            
            {props.data.map((item) => { 
                return (                        
                    <Todo key={item.id} item={item} removeTodo={props.remove}  toggleClass={props.toggleClass}/>                        
                );                
            })}
        </ul> 
    );   
}

export default TodoList;