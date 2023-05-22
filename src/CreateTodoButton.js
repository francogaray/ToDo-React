import './CreateTodoButton.css'

function CreateTodoButton() {
    return (
        <button className="CreateTodoButton" onClick={() => console.log("Btn add")}>
            +
        </button>
    );
}

export { CreateTodoButton }