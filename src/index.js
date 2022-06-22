import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from 'redux/store';
import 'modern-normalize/modern-normalize.css';
import './styles/base.scss';

// console.log(store);
console.log(store.getState());

// ----- Step 2
// Example with actions static and dynamic
// import { myAction, myAction2, myAction3 } from 'redux/actions';
// store.dispatch(myAction);
// store.dispatch(myAction2);
// store.dispatch(myAction3(5));
// store.dispatch(myAction3(10));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
