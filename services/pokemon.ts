// Rule of thumb, have 1 api slice per base url, i.e.

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pokemon } from '../types/pokemon';
import { FormDataType } from '../types/form-data';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `/pokemon/${name}`
    }),
    postForm: builder.mutation<FormDataType, Partial<FormDataType>>({
      query: (body) => ({
        url: 'sometesturl',
        method: 'POST',
        body
      })
    })
    // additional api queries can be added here
    // ...
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, usePostFormMutation } = pokemonApi;
