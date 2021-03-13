import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {text: ""}

  handleSubmit = e => {
    e.preventDefault()
    this.props.addRest(this.state.text)
    this.setState({text: ""})
  }

  handleChange = e => {
    this.setState({text: e.target.value})
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Restaurant Name:</label>
          <input onChange={this.handleChange} type="text" value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
