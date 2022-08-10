export interface IBigButton {
  text: string
  icon: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled: boolean
}

export interface ITodo {
  completed: boolean
  id: number
  item: string
}

export interface IDisplayTodos {
  todos: ITodo[]
  addTodo: (todo: ITodo) => void
  completeTodo: (id: number) => void
  removeTodo: (id: number) => void
  updateTodo: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void
}
