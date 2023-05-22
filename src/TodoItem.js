function TodoItem({ text }) {
    return (
        <li>
            <span className="check" onClick={() => console.log("Clic Check")}>
                V
            </span>
            <p>{text}</p>
            <span onClick={() => console.log("Clic X")}>X</span>
        </li>
    );
}

export { TodoItem };
