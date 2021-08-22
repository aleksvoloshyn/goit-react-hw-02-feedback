import shortid from 'short-id';
import PropTypes from 'prop-types';

import { Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import s from './FeedbackOptions.modules.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <ul>
        <ListGroup horizontal>
          {options.map(val => (
            <li style={{ marginLeft: '18px' }} key={shortid.generate()}>
              <Button
                variant="outline-info"
                type="button"
                onClick={() => onLeaveFeedback(val)}
              >
                {val}
              </Button>
            </li>
          ))}
        </ListGroup>
        {/* <li key={shortid.generate()}>
          <button type="button" onClick={() => onLeaveFeedback('good')}>
            Good
          </button>
          <button type="button" onClick={() => onLeaveFeedback('neutral')}>
            Neutral
          </button>
          <button type="button" onClick={() => onLeaveFeedback('bad')}>
            Bad
          </button>
        </li> */}
      </ul>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export { FeedbackOptions };
