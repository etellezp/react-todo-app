import React from "react"
import './Todo.css'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: this.props.todo,
      isEditing: false
    }
  }

  handleUpdate = (event) => {
    event.preventDefault()
    this.props.updateTodo(this.props.id, this.state.task)

    this.setState({
      isEditing: false
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = () => {
    this.props.removeTodo(this.props.id)
  }

  toggleForm = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleToggle = () => {
    this.props.toggleTodo(this.props.id)
  }

  render() {

    let result

    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div className="Todo">
          <li className={this.props.completed ? "Todo-task completed" : "Todo-task"} onClick={this.handleToggle}>
            {this.props.todo}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>Edit</button>
            <button onClick={this.handleClick}>X</button>
          </div>
        </div>
      )
    }

    return (
      result
    )
  }
}

export default Todo
