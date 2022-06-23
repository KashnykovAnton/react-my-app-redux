import { createAction } from '@reduxjs/toolkit';

export const incrementCounter = createAction('counter/Increment');
export const decrementCounter = createAction('counter/Decrement');
