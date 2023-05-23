import React from "react";

import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";

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
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_V1", []);
    const completedTodos = todos.filter((todo) => todo.completed).length;
    const totalTodos = todos.length;
    const [searchValue, setSearchValue] = React.useState("");

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });

    return (
        <AppUI
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchedTodos={searchedTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            loading={loading}
            error={error}
        />
    );
}

export default App;
