import { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };
  render() {
    return (
      <form>
        <input type="text" placeholder="Add To-Do..." />
        <button>Submit</button>
      </form>
    )
  }
}

export default InputTodo;