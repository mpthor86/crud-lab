import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  filterRev = () => {
    const revs = this.props.revs.filter((r) => r.restaurantId === this.props.restaurantId)
    return revs.map((r) => <Review restaurantId={this.props.restaurantId} review={r} delete={this.props.delete} />)
  }
  
  render() {
    return (
      <ul>
        {this.filterRev()}
        {/*this.props.revs.map((r) => <Review key={r.id} review={r.restId === this.props.restaurantId} />)*/}
      </ul>
    );
  }
};

export default Reviews;