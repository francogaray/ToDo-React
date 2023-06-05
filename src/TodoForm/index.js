import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const [newTodoValue, setNewTodoValue] = React.useState("");

    return (
        <form onSubmit={onSubmit} className="TodoForm">
            <label> Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Escribe tu nuevo ToDo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-btn-container">
                <button
                    className="TodoForm-btn-cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-btn-add"
                    type="submit"
                >
                    Agregar
                </button>
            </div>
        </form>
    );
}
export { TodoForm };
