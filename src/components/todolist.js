import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './todo';
import { getTodoList, getTimeStamp } from '../actions/index';

class TodoList extends Component {
    componentDidMount() {
        this.props.getTodoList();
    }
    getTimeStamp = (todo) => (ev) => {
        this.props.getTimeStamp(todo);
    }
    render() {
        return (
            <ul className="todo-list">
                {Object.values(this.props.todolist).map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={this.getTimeStamp(todo)}
                    />
                )}
            </ul>
        )
    }

}

const mapStateToProps = ({ todolist }) => ({
    todolist
})

export default connect(
    mapStateToProps,
    { getTodoList, getTimeStamp }
)(TodoList)

