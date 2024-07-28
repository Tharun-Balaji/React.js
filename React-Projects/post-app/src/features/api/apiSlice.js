import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://json-server-for-post-app.onrender.com",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({}),
});