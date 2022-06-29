import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),
  endpoints: builder => ({
    getPokemonByName: builder.query({ query: name => `/pokemon/${name}` }),
    // getPokemonById: builder.query({ query: id => `/pokemon/${id}` }),
  }),
});

export const {
  useGetPokemonByNameQuery,
  // useGetPokemonByIdQuery
} = pokemonApi;
