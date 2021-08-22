// import s from './Statistic.module.css';
// import { labels } from '../Utils/labels';
import PropTypes from 'prop-types';
import shortid from 'short-id';

function Statictic({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <>
      <ul>
        {/* {labels.map(label => (
          <li key={shortid.generate()}>{label} :</li>
        ))} */}
        <li key={shortid.generate()}>Good: {good}</li>
        <li key={shortid.generate()}>Neutral: {neutral}</li>
        <li key={shortid.generate()}>Bad: {bad}</li>
        <li key={shortid.generate()}>Total: {total}</li>
        <li key={shortid.generate()}>
          Positive Feedback: {positiveFeedback} %
        </li>
      </ul>
    </>
  );
}

Statictic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};

export { Statictic };
