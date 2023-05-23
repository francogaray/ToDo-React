import React from "react";
import TodoIcon from "./TodoIcon";

function DeleteIcon({ onDelete }) {
    return (
        <TodoIcon
            type="delete"
            color="var(--gray)"
            onClick={onDelete}
        ></TodoIcon>
    );
}

export default DeleteIcon;
