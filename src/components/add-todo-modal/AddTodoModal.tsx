import React from 'react';
import './add-todo-modal.style.css';
import { AddTodoModalProps } from './add-todo-modal.type';

const AddTodoModal: React.FC<AddTodoModalProps> = ({
    title,
    description,
    onTitleChange,
    onDescriptionChange,
    onSave,
    onCancel,
    isSaveDisabled,
}) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Add New Todo</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => onTitleChange(e.target.value)}
                    className="modal-input"
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => onDescriptionChange(e.target.value)}
                    className="modal-textarea"
                />
                <div className="modal-actions">
                    <button
                        className="modal-button"
                        disabled={isSaveDisabled}
                        onClick={onSave}
                    >
                        Save
                    </button>
                    <button className="modal-button cancel" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTodoModal;