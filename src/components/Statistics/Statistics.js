import PropTypes from 'prop-types';

export const Statistics = ({
good,
neutral,
bad,
    total,
    positivePercentage
  }) => {
    return (
<div>
<span>Good:</span><span>{good}</span>
<span>Neutral:</span><span>{neutral}</span>
<span>Bad:</span><span>{bad}</span>
    <span>Total:</span><span>{total}</span>
    <span>Positive feedback:</span><span>{positivePercentage} %</span>
</div>
  )}