import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core7.p.rapidapi.com/v',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'da91133d6emsh8c23cefb762ef4ep1fd891jsnf8755287ccfe');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/get-top-songs-in-world?limit=50' }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
