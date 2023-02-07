import Button from 'react-bootstrap/Button'
import { observer } from 'mobx-react-lite'

import todo from './store/todo'

const TodoList = observer(() => {
  return (
    <>
      {todo.todos.map((t) => (
        <div key={t.id}>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => todo.completeTodo(t.id)}
          />
          {t.title}
          <Button onClick={() => todo.removeTodo(t.id)}>Delete</Button>
        </div>
      ))}
    </>
  )
})

export default TodoList
