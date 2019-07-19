import React from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import './TodoList.css'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  updateTodo = (id, updateTask) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {...todo, task: updateTask}
      }
      return todo
    })

    this.setState({
      todos: updatedTodos
    })
  }

  toggleTodo = (id) => {
    const toggleTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })

    this.setState({
      todos: toggleTodos
    })
  }

  removeTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {

    const todosList = this.state.todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          todo={todo.task}
          removeTodo={this.removeTodo}
          updateTodo={this.updateTodo}
          toggleTodo={this.toggleTodo}
          completed={todo.completed}
        />
      )
    })

    return (
      <div className="TodoList">
        <h1>Todo List!</h1>
        <ul>{todosList}</ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    )
  }
}

export default TodoList
