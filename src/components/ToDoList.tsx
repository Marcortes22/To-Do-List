import ToDoItem, { type TodoItem } from "./ToDoItem"

interface TodoListProps {
  items: TodoItem[];
  deleteTodo: (index: number) => void;
}


export default function TodoList({ items,deleteTodo }: TodoListProps) {

  return (

    <div>


      <ul>  {items.map((item,index) => (

        <ToDoItem item={item} key={index} index = {index} deleteTodo={deleteTodo} />

      ))}

      </ul>
    </div>

  )
} 