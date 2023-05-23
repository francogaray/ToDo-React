import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { TbCheck } from "react-icons/tb";
import "./TodoIcon.css";

const iconTypes = {
    check: (color, type, completed) => (
        <TbCheck
            className={`${completed && "checked"}   Icon-svg`}
        />
    ),
    delete: (color, type, completed) => (
        <IoIosCloseCircle className="Icon-svg" fill={color} />
    ),
};

const TodoIcon = ({ type, color, completed, onClick }) => {
    return (
        <span className={`Icon Icon-svg Icon-${type}`} onClick={onClick}>
            {iconTypes[type](color, type, completed)}
        </span>
    );
};

export default TodoIcon;
