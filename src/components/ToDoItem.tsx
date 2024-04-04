import { useState } from "react"


export interface TodoItem {
  label: string;
  checked: boolean
  

}

interface TodoItemProp {
  item: TodoItem;
  index:number;
  deleteTodo: (index: number) => void;
}


// export default function ToDoForm({ addTodo, BtnText }: { addTodo: (newTodo: TodoItem) => void, BtnText: string }) {

export default function ToDoItem ({item, deleteTodo, index}:TodoItemProp) {

  
  const [isChecked, setIsChecked] = useState<boolean>(item.checked);

  const handleClick = () => {

    setIsChecked(!item.checked)
    item.checked = !isChecked

  }


  return (
    <li className="flex flex-col gap-y-4 mb-4">

      <hr  className="border-2"/>

      <div className="flex  justify-between">

        <input type="checkbox" onChange={handleClick} checked={item.checked} className="w-5  border checked:w-6 " />

        {item.label}

        <input type="button" value="Delete" className="bg-red-500 border-r rounded-lg text-white px-5 py-2 enabled:hover:border-gray-400 disabled:opacity-75"  onClick={() => {
          handleClick();
          deleteTodo(index);
        }} disabled={!item.checked} />
      </div>
    </li>)

}
