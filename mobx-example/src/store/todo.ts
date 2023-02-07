import { makeAutoObservable } from 'mobx'

type Todo = {
  id: number
  title: string
  completed: boolean
}

class TodoStore {
  todos: Array<Todo> = [
    { id: 1, title: 'Eat', completed: false },
    { id: 2, title: 'Sleep', completed: false },
    { id: 3, title: 'Code', completed: false },
    { id: 4, title: 'Repeat', completed: false },
  ]

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  completeTodo(id: number) {
    const todo = this.todos.find((todo) => todo.id === id)
    if (todo) todo.completed = true
  }
}

export default new TodoStore()
