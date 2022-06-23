import React from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import {
  incrementCounter,
  decrementCounter,
} from 'redux/counter/counter-actions';
import { getValue, getStep } from 'redux/counter/counter-selectors';
import './Counter.css';

function Counter() {
  // const value = useSelector(state => state.counter.value);
  // const step = useSelector(state => state.counter.step);

  // // pattern not recommended
  // // const {value, step} = useSelector(state => state.counter)

  // with selectors
  const value = useSelector(getValue);
  const step = useSelector(getStep);

  const dispatch = useDispatch();

  const increment = () => dispatch(incrementCounter(step));
  const decrement = () => dispatch(decrementCounter(step));

  return (
    <div className="Counter">
      <Value value={value} />
      <Controls step={step} onIncrement={increment} onDecrement={decrement} />
    </div>
  );
}

export default Counter;

// function Counter({ value, step, onIncrement, onDecrement }) {
//   return (
//     <div className="Counter">
//       <Value value={value} />
//       <Controls
//         step={step}
//         onIncrement={() => onIncrement(step)}
//         onDecrement={() => onDecrement(step)}
//       />
//     </div>
//   );
// }

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     value: state.counter.value,
//     step: state.counter.step,
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   onIncrement: value => dispatch(incrementCounter(value)),
//   onDecrement: value => dispatch(decrementCounter(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
