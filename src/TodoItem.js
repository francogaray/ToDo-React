import "./TodoItem.css";

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${
                    props.completed && "Icon-check--active"
                }`}
                onClick={() => console.log("Clic Check")}
            >
                V
            </span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
            <span
                className={`Icon Icon-delete`}
                onClick={() => console.log("Clic X")}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };
