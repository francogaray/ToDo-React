import "./TodoItem.css";
import CompleteIcon from "./CompleteIcon"
import DeleteIcon from "./DeleteIcon";


function TodoItem(props) {
    return (
        <li className="TodoItem">
            <CompleteIcon
                completed={props.completed}
            />
            {/* <span
                className={`Icon Icon-check ${
                    props.completed && "Icon-check--active"
                }`}
                onClick={props.onComplete}
            >
                V
            </span> */}
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
            {/* <span
                className={`Icon Icon-delete`}
                onClick={props.onDelete}
            >
                X
            </span> */}
            <DeleteIcon/>
        </li>
    );
}

export { TodoItem };
