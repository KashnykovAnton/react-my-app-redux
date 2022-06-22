import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import {
  incrementCounter,
  decrementCounter,
} from 'redux/counter/counter-actions';
import './Counter.css';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(incrementCounter(value)),
  onDecrement: value => dispatch(decrementCounter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
