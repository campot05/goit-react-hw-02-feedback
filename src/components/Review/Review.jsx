import React, { Component } from 'react';
import css from './Review.module.css';
class Review extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.review}>
        <h2 className={css.reviewTitle}>Please leave feedback</h2>
        <button onClick={this.clickGood}>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
        <h2 className={css.reviewTitle}>Statistics</h2>
        <p className={css.reviewStats}>Good: {good}</p>
        <p className={css.reviewStats}>Neutral: {neutral} </p>
        <p className={css.reviewStats}>Bad: {bad}</p>
      </div>
    );
  }
}

export default Review;
