import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {text: ""}

  handleSubmit = e => {
    e.preventDefault()
    const rev = {text: this.state.text, restaurantId: this.props.restaurantId}
    this.props.addRev(rev)
    this.setState({text: ""})
  }

  handleChange = e => {
    this.setState({text: e.target.value})
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Write Review</label>
          <input onChange={this.handleChange} type="text" value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
