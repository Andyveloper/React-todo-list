import { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      })
    } else {
      alert('Please write item')
    }
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add To-Do..."
          value={this.state.title}
          name="title"
          onChange={this.onChange} />
        <button>Submit</button>
      </form>
    )
  }
}

export default InputTodo;

