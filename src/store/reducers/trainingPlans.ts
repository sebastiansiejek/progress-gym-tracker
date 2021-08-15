import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

export interface exercise {
  id: string
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
      action: PayloadAction<{ dayId: string } & Omit<exercise, 'id'>>
    ) => {
      const { dayId, name, rep, series } = action.payload

      const dayIndex = state.findIndex(({ id }) => id === dayId)

      if (dayIndex > -1) {
        const id = nanoid()

        state[dayIndex].exercises.push({
          id,
          name,
          rep,
          series,
        })
      } else {
        throw `Day id: <${dayId}> not found`
      }
    },
    deleteExercise: (
      state,
      action: PayloadAction<{ dayId: string; id: string }>
    ) => {
      const day = findDay(state, action.payload.dayId)
      const exerciseIndex = day.exercises.findIndex(
        ({ id }) => id === action.payload.id
      )

      delete day.exercises[exerciseIndex]
    },
    updateExercise: (
      state,
      action: PayloadAction<{ dayId: string } & Partial<exercise>>
    ) => {
      const { dayId, id } = action.payload

      if (id) {
        const exercise = findExercise(state, dayId, id)

        const day = findDay(state, dayId)

        if (day) {
          delete action.payload['id']
          const updatedExercise = { ...exercise, ...action.payload }
          const exerciseIndex = day.exercises.findIndex(({ id }) => id === id)

          day.exercises[exerciseIndex] = updatedExercise
        }
      }
    },
  },
})

const findDay = (state: TrainingPlansState, id: string) => {
  const dayIndex = state.findIndex(({ id }) => id === id)

  if (dayIndex > -1) {
    return state[dayIndex]
  } else {
    throw `Day id: <${id}> not found`
  }
}

const findExercise = (state: TrainingPlansState, dayId: string, id: string) => {
  const day = findDay(state, dayId)
  const exercise = day.exercises.find(({ id }) => id === id)

  if (!exercise) {
    throw `Exercise id: <${id}> not found`
  }

  return exercise
}

export const {
  addDay,
  deleteDay,
  addExercise,
  deleteExercise,
  updateExercise,
} = trainingPlansSlice.actions

export default trainingPlansSlice.reducer
