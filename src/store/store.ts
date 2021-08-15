import trainingPlans from './reducers/trainingPlans'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    trainingPlans,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
