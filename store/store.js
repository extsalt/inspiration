import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counter'
import { inspirationApi } from '@/services/inspiration/inspiration'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [inspirationApi.reducerPath]: inspirationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(inspirationApi.middleware),
})
