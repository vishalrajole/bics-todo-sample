import { GET_TODOS, UPDATE_TIMESTAMP } from './types';

export const getTodoList = () => {
    const todos = {
        1: { id: 1, name: 'Todo 1' },
        2: { id: 2, name: 'Todo 2' },
        3: { id: 3, name: 'Todo 3' },
        4: { id: 4, name: 'Todo 4' },
        5: { id: 5, name: 'Todo 5' }
    };
    return {
        payload: todos,
        type: GET_TODOS
    };
};

export const getTimeStamp = (todo) => {
    const timeStamp = new Date().toString();
    return {
        payload: { ...todo, timeStamp },
        type: UPDATE_TIMESTAMP
    };
}