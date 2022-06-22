// import React, { Component } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import { increment, decrement } from 'redux/counter/counter-actions';
import './Counter.css';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />

      {/* <Controls
        step={step}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      /> */}
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

// ----- Step 3 - Counter
// const mapStateToProps = state => {
//   return { value: state.counterValue };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onIncrement: value => dispatch(increment(value)),
//     onDecrement: value => dispatch(decrement(value)),
//   };
// };

// ----- Step 4 - state is more difficult
const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(increment(value)),
  onDecrement: value => dispatch(decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// Currying (Каррирование) https://javascript.info/currying-partials
// const a = (x) => (y) => x + y
// a(2)(3) // return 5

// class Counter extends Component {
// static defaultProps = {
//   initialValue: 0,
// };

// static propTypes = {
//   //
// };

// state = {
//   value: this.props.initialValue,
// };

// handleIncrement = () => {
//   this.setState(prevState => ({
//     value: prevState.value + 1,
//   }));
// };

// handleDecrement = () => {
//   this.setState(prevState => ({
//     value: prevState.value - 1,
//   }));
// };

// render() {
// const { value } = this.state;

//     return (
//       <div className="Counter">
//         <Value value={value} />

//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </div>
//     );
//   }
// }

// export default Counter;
