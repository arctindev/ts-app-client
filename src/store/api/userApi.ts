import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/authentication/',
  }),
  tagTypes: ['User'],

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: `login/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useLoginMutation } = userApi;
