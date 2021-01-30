import { TodoItemProp } from '../todo/TodoList';

type Action_type = {
    type: string;
    payload: TodoItemProp;
}

const TodoReducer = (state: {todoList: TodoItemProp[]} = {todoList:[]}, action: Action_type) => {
    switch(action.type) {
        case 'ADD_TODO': 
            return {todoList :[...state.todoList , action.payload]};
        case 'REMOVE_TODO':
            return { todoList: state.todoList.length ? state.todoList.filter((d) => d.id !== action.payload.id) : []};
        case 'UPDATE_TODO':
            return { todoList: state.todoList.length ? state.todoList.map((d) => {
                if(d.id === action.payload.id){
                    d.completed = !d.completed;
                }
                return d;
            }) : []};
        default:
            return state;
    }
}

export default TodoReducer;