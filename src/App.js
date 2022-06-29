import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Container from 'components/Container';
import CounterView from './views/CounterView';
import TodosView from 'views/TodosView';
import WeatherView from 'views/WetherView';
import PokemonsView from 'views/PokemonViews';
import PostView from 'views/PostView';
import PostViewDel from 'views/PostViewDel';
import PostCreate from 'components/PostCreate';

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
      <li>
        <Link to="/pokemons">Pokemons</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/posts-del">Posts with pattern for Del button</Link>
      </li>
    </ul>

    <Routes>
      <Route path="/counter" element={<CounterView />} />

      <Route path="/todos" element={<TodosView />} />

      <Route path="/weather" element={<WeatherView />} />

      <Route path="/pokemons" element={<PokemonsView />} />

      <Route path="/posts" element={<PostView />} />

      <Route path="/posts-del" element={<PostViewDel />} />

      <Route path="/posts/create" element={<PostCreate />} />
    </Routes>
  </Container>
);

export default App;
