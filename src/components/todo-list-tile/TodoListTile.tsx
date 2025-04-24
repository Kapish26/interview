import React from 'react';
import './todo-list-tile.style.css';
import { TodoListTileProps } from './todo-list-tile.type';

const TodoListTile: React.FC<TodoListTileProps> = ({
    title,
    description,
    isCompleted,
    onDelete,
    onComplete
}) => {
    return (
        <div className={`list-tile ${isCompleted ? 'completed' : ''}`}>
            <div className="tile-left">
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={onComplete}
                    className="completion-box"
                />
            </div>
            <div className={`tile-content ${isCompleted ? 'completed' : ''}`}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="tile-right">
                <button className="delete-button" onClick={onDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoListTile;