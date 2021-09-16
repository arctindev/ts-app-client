import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/user-data/',
  }),

  endpoints: (builder) => ({
    getHistory: builder.query({
      query: () => ({
        url: `history`,
        headers: {
          authorization: `asdasdasd`,
        },
      }),
    }),

    getDayById: builder.mutation({
      query: (body) => ({
        url: `history/${body.id}`,
        method: 'GET',
        headers: {
          authorization: `asdasdasd`,
        },
      }),
    }),
  }),
});

export const { useGetHistoryQuery, useGetDayByIdMutation } = servicesApi;
