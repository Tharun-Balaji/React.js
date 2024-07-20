import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const call = createApi({
  reducerPath: "call",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/albums"
  }),
  tagTypes: ["Albums"],
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: () => "/",
    }),
  }),
});

console.log(call);
export default call;