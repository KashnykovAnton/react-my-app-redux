import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Container from 'components/Container';
import CounterView from './views/CounterView';
import TodosView from 'views/TodosView';
import WeatherView from 'views/WetherView';

const App = () => (
  <Container>
    <ul>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/todos">Todos</Link>
      </li>
      <li>
        <Link to="/weather">Weather</Link>
      </li>
    </ul>

    <Routes>
      <Route path="/counter" element={<CounterView />} />

      <Route path="/todos" element={<TodosView />} />

      <Route path="/weather" element={<WeatherView />} />
    </Routes>
  </Container>
);

export default App;
