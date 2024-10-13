import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const inspirationApi = createApi({
  reducerPath: 'inspiration',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
  }),
  endpoints: (builder) => ({
    getInspiration: builder.query({
      query: () => 'inspiration',
    }),
  }),
})

export const { useGetInspirationQuery, useLazyGetInspirationByAuthorQuery } =
  inspirationApi
