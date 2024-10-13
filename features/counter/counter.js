import { inspirationApi } from '@/services/inspiration/inspiration'
import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    arr: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        inspirationApi.endpoints.getInspiration.matchFulfilled,
        (state, action) => {
          state.arr = [0, 0, 0]
        }
      )
      .addMatcher(
        inspirationApi.endpoints.getInspiration.matchPending,
        (state, action) => {
          state.arr = [-1, -1, -1]
        }
      )
      .addMatcher(
        inspirationApi.endpoints.getInspiration.matchRejected,
        (state, action) => {
          state.arr = [1, 1, 1]
        }
      )
  },
})

export const { increment, decrement } = slice.actions
export default slice.reducer
