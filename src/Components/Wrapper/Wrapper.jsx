import React from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statictic } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { Section } from '../Section/Section';

// import s from './Wrapper.module.css';

class Wrapper extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = val => {
    this.setState(prevState => ({ [val]: prevState[val] + 1 }));
  };

  render() {
    return (
      <>
        <Section title="Please leave feedbak">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        {Object.values(this.state).find(val => val !== 0) ? (
          <Section title="Statistics">
            <Statictic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.good + this.state.neutral + this.state.bad}
              positiveFeedback={Math.round(
                ((this.state.good + this.state.neutral) /
                  (this.state.good + this.state.neutral + this.state.bad)) *
                  100,
              )}
            />
          </Section>
        ) : (
          <Section>
            <Notification message="No feedback given" />
          </Section>
        )}
      </>
    );
  }
}

export { Wrapper };
