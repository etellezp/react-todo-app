import React from "react"
import uuid from "uuid/v4"
import './NewTodoForm.css'

class NewTodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo({...this.state, id: uuid(), completed: false})

    this.setState({
      task: ""
    })
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          id="task"
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default NewTodoForm
