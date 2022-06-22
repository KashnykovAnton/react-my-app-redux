import React from 'react';

const Controls = ({ step, onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onDecrement}>
      Decrement on {step}
    </button>
    <button type="button" onClick={onIncrement}>
      Increment on {step}
    </button>
  </div>
);

export default Controls;
