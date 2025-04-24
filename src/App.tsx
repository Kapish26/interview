import { useState } from 'react';
import TodoListTile from './components/todo-list-tile/TodoListTile';
import AddTodoModal from './components/add-todo-modal/AddTodoModal';
import './App.css';
import { Todo } from './types/todo.type';

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [newTodo, setNewTodo] = useState({ title: '', description: '' });

    const handleAddTodo = () => {
        setShowModal(true);
    };

    const handleSaveTodo = () => {
        if (newTodo.title.trim() && newTodo.description.trim()) {
            setTodos([
                ...todos,
                {
                    id: todos.length + 1,
                    title: newTodo.title,
                    description: newTodo.description,
                    isCompleted: false,
                },
            ]);
            setNewTodo({ title: '', description: '' });
            setShowModal(false);
        }
    };

    const handleComplete = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="app">
            <div>
                <h1>Todo List</h1>
                <div className="add-todo-container">
                    <p>Manage your tasks efficiently</p>
                    <div className="add-todo">
                        <button className="add-todo-button" onClick={handleAddTodo}>
                            + Add Todo
                        </button>
                    </div>
                </div>
                {todos?.filter((todo) => !todo.isCompleted).map((todo) => (
                    <TodoListTile
                        key={todo.id}
                        title={todo.title}
                        description={todo.description}
                        isCompleted={todo.isCompleted}
                        onDelete={() => handleDelete(todo.id)}
                        onComplete={() => handleComplete(todo.id)}
                    />
                )) ?? <p>No todos available</p>}
            </div>

            {todos && todos.find((todo) => todo.isCompleted) && (
                <div>
                    <h3>Completed Todos</h3>
                    {todos
                        ?.filter((todo) => todo.isCompleted)
                        .map((todo) => (
                            <TodoListTile
                                key={todo.id}
                                title={todo.title}
                                description={todo.description}
                                isCompleted={todo.isCompleted}
                                onDelete={() => handleDelete(todo.id)}
                                onComplete={() => handleComplete(todo.id)}
                            />
                        ))}
                </div>
            )}

            {showModal && (
                <AddTodoModal
                    title={newTodo.title}
                    description={newTodo.description}
                    onTitleChange={(value) => setNewTodo({ ...newTodo, title: value })}
                    onDescriptionChange={(value) =>
                        setNewTodo({ ...newTodo, description: value })
                    }
                    onSave={handleSaveTodo}
                    onCancel={() => {
                        setShowModal(false);
                        setNewTodo({ title: '', description: '' });
                    }}
                    isSaveDisabled={
                        !(newTodo.title.trim().length > 0 && newTodo.description.trim().length > 0)
                    }
                />
            )}
        </div>
    );
};

export default App;