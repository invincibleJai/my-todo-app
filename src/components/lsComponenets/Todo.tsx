import React from 'react';
import Footer from '../Footer';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import AddTodo from '../todo/AddTodo';
import TodoList, { TodoItemProp } from '../todo/TodoList';

const defaultTodoItem: TodoItemProp = { id: Date.now(), text: '', completed: false };

const Todo: React.FC = () => {
    const [todoItem, setTodoItem] = React.useState<TodoItemProp>(defaultTodoItem);
    const [todoListLS, setTodoListLS] = useLocalStorage('myTodoKey', []);
    const [todoList, setTodoList] = React.useState(todoListLS);

    React.useEffect(() => {
        setTodoList(todoListLS)
    },[todoListLS])

    const updateTodoItem = (text: string) => {
        setTodoItem({ id: Date.now(), text: text, completed: false })
    }
    const addTaskToList = () => {
        setTodoListLS([...todoListLS, todoItem]);
        setTodoItem({ id: Date.now(), text: '', completed: false });
    }
    const removeItem = (id: number) => {
        const newTodoList = todoListLS?.filter((d:{id:number}) => d.id !== id);
        setTodoListLS(newTodoList)
    }
    const toggleItemStatus = (id: number) => {
        const updatedTodoList = todoListLS?.map((d:TodoItemProp) => {
            if(d.id === id){
                d.completed = !d.completed;
            }
            return d;
        });
        setTodoListLS(updatedTodoList);
    }
    const filterTodoList = (type?: string) => {
        switch(type) {
            case 'active':
                const filteredActiveTodoList = todoListLS?.filter((d: TodoItemProp) => !d.completed);
                setTodoList(filteredActiveTodoList);
                break;
            case 'completed':
                const filteredCompletedTodoList = todoListLS?.filter((d: TodoItemProp) => d.completed);
                setTodoList(filteredCompletedTodoList);
                break;
            default:
                setTodoList(todoListLS);
                break;
        }
    }
    return (
        <>
            <AddTodo todoItem={todoItem} updateTodoItem={updateTodoItem} addTaskToList={addTaskToList} />
            <TodoList listData={todoList} removeItem={removeItem} toggleItemStatus={toggleItemStatus}/>
            <Footer item={todoList.length} storage="Local Storage" filterTodoList={filterTodoList}/>
        </>
    )
}

export default Todo;