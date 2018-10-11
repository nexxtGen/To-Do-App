import React from 'react';
import style from './TodoFilter.css'

const TodoFilter = props => (
    <form className={style.filter}>
        <input type="text" placeholder="Filter items..." value={props.filter} onChange={props.onFilterChange}/>
    </form>
)
export default TodoFilter;