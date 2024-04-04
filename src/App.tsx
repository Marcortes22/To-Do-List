import { useState, useEffect } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoHeader from "./components/ToDoHeader";
import ToDoList from "./components/ToDoList";
import "./styles/index.css";
import { type TodoItem } from "./components/ToDoItem";

function App() {
  // const dafautlItems: TodoItem[] = [];

  const localStorageKey = "myTodos";

  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const saveOnLocalStorage = (list: TodoItem[]) => {
    const todos = JSON.stringify(list);

    localStorage.setItem(`${localStorageKey}`, todos);
  };

  useEffect(() => {
    const jsonStringRetrieve = localStorage.getItem(localStorageKey);

    // Verificar si jsonStringRecuperado no es null antes de usarlo
    if (jsonStringRetrieve !== null) {
      // Analizar la cadena JSON para obtener el arreglo de objetos
      const arrayRetrieve: TodoItem[] = JSON.parse(jsonStringRetrieve);
      console.log(arrayRetrieve);

      setTodoList(arrayRetrieve);
    }
  }, []); // La dependencia vacía asegura que este efecto se ejecute solo al montar el componente

  // Resto de tu componente...

  const addTodo = (newTodo: TodoItem) => {
    const newTodoList: TodoItem[] = [...todoList, newTodo]; // creé una nueva lista porque a la hora de guardar en el local storage se hace primero que el set del hook y no se actualiza la informacion.
    setTodoList(newTodoList);

    saveOnLocalStorage(newTodoList);
  };

  const deleteTodo = (index: number) => {
    const newList = todoList.filter((_, i) => i !== index);

    setTodoList(newList);

    localStorage.clear();

    saveOnLocalStorage(newList);
  };

  return (
    <>
      <section className="flex flex-col  gap-y-10">
        <ToDoHeader Title={"My To-dos"}></ToDoHeader>

        <ToDoForm addTodo={addTodo} BtnText={"Save"}></ToDoForm>

        <ToDoList items={todoList} deleteTodo={deleteTodo}></ToDoList>
      </section>
    </>
  );
}

export default App;
