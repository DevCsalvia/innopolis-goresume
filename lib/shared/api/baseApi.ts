import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://178.154.203.119",
  }),
  endpoints: () => ({}),
});
