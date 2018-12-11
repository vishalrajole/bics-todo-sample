import React from 'react';

// We can write styled components for classes https://styled-components.com
const Todo = ({ onClick, name, timeStamp }) => (
    <li onClick={onClick}>
        <h4 className="todo-name">{name}</h4>
        <small>{timeStamp}</small>
        <button className="primary-btn">Display Time</button>
    </li>
)

export default Todo