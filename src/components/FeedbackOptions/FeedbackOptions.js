import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
   return (<div>
    {options.map(option => (
        <button
          type="button"
          onClick={() => onLeaveFeedback(option)}
          key={option}
        >
          {option}
        </button>
      ))}
      </div> )
}