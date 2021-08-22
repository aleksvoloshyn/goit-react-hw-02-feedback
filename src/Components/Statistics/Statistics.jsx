// import s from './Statistic.module.css';
// import { labels } from '../Utils/labels';
import PropTypes from 'prop-types';
import shortid from 'short-id';
import { ProgressBar, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Statictic({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <>
      <ListGroup>
        <ul>
          {/* {labels.map(label => (
          <li key={shortid.generate()}>{label} :</li>
        ))} */}
          <li key={shortid.generate()}>
            <ListGroup.Item>
              <ProgressBar variant="info" now={good} label="%" />
              Good: {good}
            </ListGroup.Item>
          </li>

          <li key={shortid.generate()}>
            <ListGroup.Item>
              <ProgressBar now={neutral} label="%" variant="success" />
              Neutral: {neutral}
            </ListGroup.Item>
          </li>

          <li key={shortid.generate()}>
            <ListGroup.Item>
              <ProgressBar animated now={bad} label="%" variant="danger" />
              Bad: {bad}
            </ListGroup.Item>
          </li>
          <li key={shortid.generate()}>Total: {total}</li>
          <li key={shortid.generate()}>
            Positive Feedback: {positiveFeedback} %
          </li>
        </ul>
      </ListGroup>
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
