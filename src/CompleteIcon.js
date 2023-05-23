import React from "react";
import TodoIcon from "./TodoIcon";

function CompleteIcon({completed}) {
    return (
        <TodoIcon type="check" color="gray" completed={completed}>
        </TodoIcon>
    );
}

export default CompleteIcon;
