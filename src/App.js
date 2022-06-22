import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CounterView from './views/CounterView';
import TodosView from 'views/TodosView';

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/todos">Todos</Link>
      </li>
    </ul>

    <Routes>
      <Route path="/counter" element={<CounterView />} />

      <Route path="/todos" element={<TodosView />} />
    </Routes>
  </>
);

export default App;
