import React from "react";
import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

// localStorage.removeItem('TODOS_V1')
// const defaultTodos = [
//     { text: "Cortar cebolla", completed: true },
//     { text: "Tomar el Curso de Intro a React", completed: false },
//     { text: "Tomar el Curso de Intro a React2", completed: false },
//     { text: "Llorar con la Llorona", completed: false },
//     { text: "Hacer ejercicios", completed: true },
//     { text: "Hacer ejercicasdasdios", completed: false },
//     { text: "LALALALA", completed: false },
// ];
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos) )



function App() {
    let localStorageTodos = localStorage.getItem('TODOS_V1')
    let parsedTodos

    if (!localStorageTodos) {
        localStorage.setItem('TODO', JSON.stringify([]))
        parsedTodos = []
    } else{
        parsedTodos = JSON.parse(localStorageTodos)
    }


    const [todos, setTodos] = React.useState(parsedTodos);

    const completedTodos = todos.filter((todo) => todo.completed).length;
    const totalTodos = todos.length;

    const [searchValue, setSearchValue] = React.useState("");

    const saveTodos = (newTodos) => {
        localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
        setTodos(newTodos)
    }

    const completeTodo = (text) =>{
        const newTodos= [...todos]
        const todoIndex = newTodos.findIndex(
            (todo)=> todo.text === text
        )
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }
    const deleteTodo = (text) => {
        const newTodos= [...todos]
        const todoIndex = newTodos.findIndex(
            (todo)=> todo.text === text
        )
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)

        console.log("Delete")

    }

    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });

    return (
        <>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={ () => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export default App;
