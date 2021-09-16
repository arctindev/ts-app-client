import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/user-data/',
  }),

  endpoints: (builder) => ({
    getHistory: builder.query({
      query: () => ({
        url: `getUser/`,
      }),
    }),

    login: builder.mutation({
      query: (body) => ({
        url: `login/`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetHistoryQuery, useLoginMutation } = userApi;
