import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addRev={this.props.addRev}/>
        <Reviews revs={this.props.revs} restaurantId={this.props.restaurant.id} delete={this.props.delete}/>
      </div>
    )
  }
}

const stateToProps = state => {
  return {revs: state.reviews}
}

const dispToProps = disp => ({
  addRev: review => disp({type: 'ADD_REVIEW', review}),
  delete: id => disp({type: 'DELETE_REVIEW', id})
})

export default connect(stateToProps, dispToProps)(ReviewsContainer)
