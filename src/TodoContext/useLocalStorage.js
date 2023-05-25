import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                let localStorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem)
                }

                setLoading(false);
            } catch (error) {
                setLoading(false)
                setError(true)
                console.log(error)
            }
        },2000);
    },[initialValue, itemName]);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };

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