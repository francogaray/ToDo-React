import React from "react";
import TodoIcon from "./TodoIcon";

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon
            type="check"
            color="gray"
            completed={completed}
            onClick={onComplete}
        ></TodoIcon>
    );
}

export default CompleteIcon;
