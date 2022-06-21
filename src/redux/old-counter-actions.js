// ----- Step 2
// Example with actions static and dynamic
// export const myAction = {
//   type: 'MY_ACTION',
//   payload: 'super payload',
// };

// // static
// export const myAction2 = {
//   type: 'MY_ACTION_2',
//   payload: 'super payload 2',
// };

// // dynamic = action-creator
// export const myAction3 = value => ({ type: 'MY_ACTION_3', payload: value });

// ----- Step 3 - Counter
export const increment = value => ({
  type: 'counter/Increment',
  payload: value,
});

export const decrement = value => ({
  type: 'counter/Decrement',
  payload: value,
});
