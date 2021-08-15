import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

export type TrainingPlansState = Array<{
  id: string
  name: string
  exercises: Array<{
    name: string
    rep: number
    series: number
  }>
}>

const initialState: TrainingPlansState = []

export const trainingPlansSlice = createSlice({
  name: 'trainingPlans',
  initialState,
  reducers: {
    addDay: (state, action: PayloadAction<{ name: string }>) => {
      const id = nanoid()
      const { name } = action.payload
      state.push({ id, name, exercises: [] })
    },
    deleteDay: (state, action: PayloadAction<{ id: string }>) => {
      state.splice(
        state.findIndex(({ id }) => id === action.payload.id),
        1
      )
    },
  },
})

export const { addDay, deleteDay } = trainingPlansSlice.actions

export default trainingPlansSlice.reducer
