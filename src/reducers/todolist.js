const todolist = (state = {}, action) => {
    switch (action.type) {
        case 'GET_TODOS':
            return action.payload;
        case 'UPDATE_TIMESTAMP':
            let newV = {};
            newV[action.payload.id] = { ...action.payload }
            return { ...state, ...newV };
        default:
            return state
    }
}

export default todolist;