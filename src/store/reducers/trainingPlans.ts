import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

export interface exercise {
  name: string
  rep: number
  series: number
}

export type TrainingPlansState = Array<{
  id: string
  name: string
  exercises: Array<exercise>
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
    addExercise: (
      state,
      action: PayloadAction<{ dayId: string } & exercise>
    ) => {
      const { dayId, name, rep, series } = action.payload

      const dayIndex = state.findIndex(({ id }) => id === dayId)

      if (dayIndex > -1) {
        state[dayIndex].exercises.push({
          name,
          rep,
          series,
        })
      } else {
        throw `Day id: <${dayId}> not found`
      }
    },
  },
})

export const { addDay, deleteDay, addExercise } = trainingPlansSlice.actions

export default trainingPlansSlice.reducer
