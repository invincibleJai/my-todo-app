import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer';
import AddTodo from '../todo/AddTodo';
import TodoList, { TodoItemProp } from '../todo/TodoList';

const defaultTodoItem: TodoItemProp = { id: Date.now(), text: '', completed: false };

const TodoRedux: React.FC = () => {
    const todoListState: TodoItemProp[] = useSelector((state: { todoList: TodoItemProp[] }) => state.todoList);
    const dispatch = useDispatch();
    const [todoItem, setTodoItem] = React.useState<TodoItemProp>(defaultTodoItem);
    const [todoList, setTodoList] = React.useState<TodoItemProp[]>(todoListState);

    React.useEffect(() => {
        setTodoList(todoListState)
    },[todoListState])

    const updateTodoItem = (text: string) => {
        setTodoItem({ id: Date.now(), text: text, completed: false });
    }
    const addTaskToList = () => {
        dispatch({ type: 'ADD_TODO', payload: todoItem });
        setTodoItem(defaultTodoItem);
    }
    const removeItem = (id: number) => {
        dispatch({ type: 'REMOVE_TODO', payload: { id } });
    }
    const toggleItemStatus = (id: number) => {
        dispatch({ type: 'UPDATE_TODO', payload: { id } });
    }
    const filterTodoList =(type?: string) => {
        switch(type) {
            case 'active':
                const filteredActiveTodoList = todoListState?.filter((d: TodoItemProp) => !d.completed);
                setTodoList(filteredActiveTodoList);
                break;
            case 'completed':
                const filteredCompleteTodoList = todoListState?.filter((d: TodoItemProp) => d.completed);
                setTodoList(filteredCompleteTodoList);
                break;
            default:
                setTodoList(todoListState);
                break;
        }
    }

    return (
        <>
            <AddTodo todoItem={todoItem} updateTodoItem={updateTodoItem} addTaskToList={addTaskToList} />
            <TodoList listData={todoList} removeItem={removeItem} toggleItemStatus={toggleItemStatus} />
            <Footer item={todoList.length} storage="Redux Store" filterTodoList={filterTodoList} />
        </>
    )
}

export default TodoRedux;