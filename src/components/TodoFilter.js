import React from 'react';

const TodoFilter = props => (
    <form>
        <input type="text" placeholder="Filter items..." value={props.filter} onChange={props.onFilterChange}/>
    </form>
)
export default TodoFilter;