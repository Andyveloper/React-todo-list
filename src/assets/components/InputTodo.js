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
      <form onSubmit={this.handleSubmit} className='form-container'>
        <input
          type="text"
          className="input-text"
          placeholder="Add To-Do..."
          value={this.state.title}
          name="title"
          onChange={this.onChange} />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}

export default InputTodo;

