import React, { Component } from 'react';
import Star from './Star.old';

class StarRating extends Component {
  // Initialize a 'rating' state
  state = {
    rating: ''
  };
  // Write a function that returns 5 Star components
  fiveStar = () => {
    let star = [];
    let starRating = 5;
    for (let i = 0; i < starRating; i++) {
      star.push(
        <Star
          isSelected={this.state.rating > i}
          key={i}
          setRating={() => this.handleRating(i + 1)}
        />
      );
    }
    return star;
  };
  // Write an event handler that updates the rating state.
  handleRating = rating => {
    this.state.rating === rating
      ? this.setState({ rating: 0 })
      : this.setState({ rating });
  };

  // Pass the function to a Star component via props

  render() {
    return (
      <ul className='course--stars'>
        {/* Render the Star components */}
        {this.fiveStar()}
      </ul>
    );
  }
}

export default StarRating;
