import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/user-data/',
  }),
  tagTypes: ['Services'],

  endpoints: (builder) => ({
    getHistory: builder.query({
      query: () => ({
        url: `history`,
        headers: {
          authorization: `${sessionStorage.getItem('token')}`,
        },
        providesTags: ['Services'],
      }),
    }),

    getDayById: builder.mutation({
      query: (body) => ({
        url: `history/${body.id}`,
        method: 'GET',
        headers: {
          authorization: `${sessionStorage.getItem('token')}`,
        },
        providesTags: ['Services'],
      }),
    }),
  }),
});

export const { useGetHistoryQuery, useGetDayByIdMutation } = servicesApi;
