import React, { Component } from 'react';
import css from './Review.module.css';

class Review extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtn = e => {
    const name = e.target.name;
    this.setState(prev => {
      return { [name]: prev[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    //  console.log(this.countPositiveFeedbackPercentage());
    return (
      <div className={css.review}>
        <h2 className={css.reviewTitle}>Please leave feedback</h2>
        <button name="good" onClick={this.onClickBtn}>
          Good
        </button>
        <button name="neutral" onClick={this.onClickBtn}>
          Neutral
        </button>
        <button name="bad" onClick={this.onClickBtn}>
          Bad
        </button>
        <h2 className={css.reviewTitle}>Statistics</h2>
        <p className={css.reviewStats}>Good: {good}</p>
        <p className={css.reviewStats}>Neutral: {neutral} </p>
        <p className={css.reviewStats}>Bad: {bad}</p>
        <p className={css.reviewStats}>Total: {this.countTotalFeedback()}</p>
        <p className={css.reviewStats}>
          Positive feedback: {this.countPositiveFeedbackPercentage()}%
        </p>
      </div>
    );
  }
}

export default Review;
