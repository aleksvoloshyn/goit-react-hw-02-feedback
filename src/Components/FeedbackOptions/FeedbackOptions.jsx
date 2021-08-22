// import s from './FeedbackOptions.module.css';
// import { labels } from '../Utils/labels';
import shortid from 'short-id';

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <h2>Please leave feedbak</h2>
      <ul>
        <li key={shortid.generate()}>
          <button type="button" onClick={() => onLeaveFeedback('good')}>
            Good
          </button>
          <button type="button" onClick={() => onLeaveFeedback('neutral')}>
            Neutral
          </button>
          <button type="button" onClick={() => onLeaveFeedback('bad')}>
            Bad
          </button>
        </li>
      </ul>
    </>
  );
}

export { FeedbackOptions };
