import React from "react";
import "./TodosLoading.css";
import CompleteIcon from "../TodoIcon/CompleteIcon";
import DeleteIcon from "../TodoIcon/DeleteIcon";

function TodosLoading(props) {
    return (
        <>
            <span className="TodosLoading loader">
                <CompleteIcon/>

                <DeleteIcon  />
            </span>
        </>
    );
}

export { TodosLoading };
