import { useState} from "react"
import { type TodoItem } from "./ToDoItem"

export default function ToDoForm({ addTodo, BtnText }: { addTodo: (newTodo: TodoItem) => void, BtnText: string }) {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(inputValue.trim() === "")return

    const newTodo:TodoItem = {
      label: `${inputValue}`,
      checked: false
    }; 

    addTodo(newTodo);
    setInputValue('');
  };


    return (
    <>

      <div>

        <form onSubmit={handleSubmit} className="flex gap-x-3">

          <input type="text" value={inputValue} onChange={handleInputChange}
            placeholder="Add somenthing to do..." className="border-2 border-gray-300 border-r rounded-lg p-1"  />

          <input type="submit" value={BtnText} className="bg-teal-500 border-r rounded-lg text-white px-5 py-2"/>
        </form>

      </div>
    </>
  )

}
