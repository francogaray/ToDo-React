import React from "react";
import TodoIcon from ".";

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
