import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO_ACTION, REMOVE_TODO_ACTION, UPDATE_TODO_ACTION } from '../../constants';
import Footer from '../Footer';
import FilterReducer from '../reducers/FilterReducer';
import AddTodo from '../todo/AddTodo';
import TodoList, { TodoItemProp } from '../todo/TodoList';

const defaultTodoItem: TodoItemProp = { id: Date.now(), text: '', completed: false };

const TodoRedux: React.FC = () => {
    const todoList: TodoItemProp[] = useSelector((state: { todoList: TodoItemProp[] }) => state.todoList);
    const dispatch = useDispatch();
    const [todoItem, setTodoItem] = React.useState<TodoItemProp>(defaultTodoItem);
    const [todoListData, setTodoListData] = React.useState<TodoItemProp[]>(todoList);

    React.useEffect(() => {
        setTodoListData(todoList)
    },[todoList])

    const updateTodoItem = (text: string) => {
        setTodoItem({ id: Date.now(), text: text, completed: false });
    }
    const addTaskToList = () => {
        dispatch({ type: ADD_TODO_ACTION, payload: todoItem });
        setTodoItem(defaultTodoItem);
    }
    const removeItem = (id: number) => {
        dispatch({ type: REMOVE_TODO_ACTION, payload: { id } });
    }
    const toggleItemStatus = (id: number) => {
        dispatch({ type: UPDATE_TODO_ACTION, payload: { id } });
    }
    const filterTodoList =(type: string) => {
        const filteredList = FilterReducer(todoList, {type});
        setTodoListData(filteredList);
    }

    return (
        <>
            <AddTodo todoItem={todoItem} updateTodoItem={updateTodoItem} addTaskToList={addTaskToList} />
            <TodoList listData={todoListData} removeItem={removeItem} toggleItemStatus={toggleItemStatus} />
            <Footer item={todoListData.length} storage="Redux Store" filterTodoList={filterTodoList} />
        </>
    )
}

export default TodoRedux;