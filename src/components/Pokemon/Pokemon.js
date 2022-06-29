import { useState } from 'react';
import {
  useGetPokemonByNameQuery,
  //   useGetPokemonByIdQuery,
} from 'redux/pokemon/pokemon';

import { Watch } from 'react-loader-spinner';

const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState('');
  //   const [pokemonId, setPokemonId] = useState('');

  const { data, error, isFetching, isUninitialized, isError, refetch } =
    useGetPokemonByNameQuery(pokemonName, {
      skip: pokemonName === '',
      refetchOnFocus: true,
    });

  //   const { data, error } = useGetPokemonByIdQuery(pokemonId, {
  //     skip: pokemonId === '',
  //   });

  const handleSubmitByName = e => {
    e.preventDefault();
    setPokemonName(e.currentTarget.elements.pokemonName.value);
    e.currentTarget.reset();
  };

  //   const handleSubmitById = e => {
  //     e.preventDefault();
  //     setPokemonId(e.currentTarget.elements.pokemonId.value);
  //     console.log(pokemonId);
  //   };

  //   const { sprites, name, stats, id } = data;

  return (
    <>
      <h2>Pokemon Page</h2>
      <form autoComplete="off" onSubmit={handleSubmitByName}>
        <input type="text" name="pokemonName" />
        <button type="submit">Search pokemon by name</button>
      </form>
      <button onClick={refetch} disabled={isUninitialized}>
        REFETCH
      </button>
      {/* <form autoComplete="off" onSubmit={handleSubmitById}>
        <input type="text" name="pokemonId" />
        <button type="submit">Search pokemon by id</button>
      </form> */}
      {isFetching && (
        <Watch height="60" width="60" color="#00BFFF" ariaLabel="loading" />
      )}
      {!isFetching && !isError && data && (
        <div>
          <div>
            <img
              src={data.sprites.other['official-artwork'].front_default}
              width="240"
              alt={data.name}
            />
          </div>
          <div>
            <h2>
              {data.name} / id:{data.id}
            </h2>
            <ul>
              {data.stats.map(entry => (
                <li key={entry.stat.name}>
                  {entry.stat.name}: {entry.base_stat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {isError && <h2>{error.data}, please enter correct name or id</h2>}
    </>
  );
};

export default Pokemon;
