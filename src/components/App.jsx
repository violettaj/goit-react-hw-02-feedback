import { Component } from 'react'
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  static defaultProps = {
    step: 1,
};

onLeaveFeedback = option => {
  this.setState(prevState => ({ [option]: prevState[option] + 1 }));
};

countTotalFeedback = () => {
   const total = this.state.good + this.state.neutral + this.state.bad
   return total;
}

countPositiveFeedbackPercentage = () => {
    const positive = Math.round(
        (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
      );
    return positive  || '';
 }

  render() {
      return (
        <div>
           <Section
    title="Please leave feedback" />
    <FeedbackOptions
   options={Object.keys(this.state)}
   onLeaveFeedback={this.onLeaveFeedback}
   />
    <h2>Statistics</h2>
    <Statistics
    good={this.state.good}
    neutral={this.state.neutral}
  bad={this.state.bad}
    total={this.countTotalFeedback()}
   positivePercentage={this.countPositiveFeedbackPercentage()} />

</div>
        
      );

    }
}

