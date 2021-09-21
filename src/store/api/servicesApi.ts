import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/user-data/',
  }),

  endpoints: (builder) => ({
    getHistory: builder.mutation({
      query: () => ({
        url: `history`,
        method: 'GET',
        headers: {
          authorization: `${sessionStorage.getItem('token')}`,
          userid: `${sessionStorage.getItem('me')}`,
        },
      }),
    }),

    getDayById: builder.mutation({
      query: (body) => ({
        url: `history/${body.id}`,
        method: 'GET',
        headers: {
          authorization: `${sessionStorage.getItem('token')}`,
          userid: `${sessionStorage.getItem('me')}`,
        },
      }),
    }),
  }),
});

export const { useGetHistoryMutation, useGetDayByIdMutation } = servicesApi;
