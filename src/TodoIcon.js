import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { TbCheck } from "react-icons/tb";
import "./TodoIcon.css"

const iconTypes = {
    "check":( color, type, completed ) => <TbCheck className={`${completed ? "checked" : "asasdas"}   Icon-svg`}/>,
    "delete":( color, type, completed ) => <IoIosCloseCircle className="Icon-svg" fill={color}/>
}

const TodoIcon = ({ type, color, completed }) => {
    return (
        <span className={`Icon Icon-svg Icon-${type}  `}>
            {iconTypes[type](color,type,completed)}
        </span>
    );
};

export default TodoIcon;
