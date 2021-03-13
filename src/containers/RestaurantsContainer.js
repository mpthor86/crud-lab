import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import {connect} from "react-redux"

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRest={this.props.addRest}/>
        <Restaurants restaurants={this.props.restaurants} delete={this.props.deleteRest}/>
      </div>
    )
  }
}

const mapStateToProps = ({restaurants}) => ({restaurants})

const mapDispatchToProps = dispatch => ({
  addRest: text => dispatch({type: 'ADD_RESTAURANT', text}),
  deleteRest: id => dispatch({type: 'DELETE_RESTAURANT', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
