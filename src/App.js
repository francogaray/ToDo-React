import React from "react";
import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
    { text: "Cortar cebolla", completed: true },
    { text: "Tomar el Curso de Intro a React", completed: false },
    { text: "Tomar el Curso de Intro a React2", completed: false },
    { text: "Llorar con la Llorona", completed: false },
    { text: "Hacer ejercicios", completed: true },
    { text: "Hacer ejercicasdasdios", completed: true },
];

function App() {
    const [todos, setTodos] = React.useState(defaultTodos)

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length

    const [searchValue, setSearchValue] = React.useState("");
    console.log("El usuario está buscando: " + searchValue);


    return (
        <>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />
            <TodoList>
                {defaultTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.copleted}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    )
}

export default App;
