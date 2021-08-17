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
      const dayIndex = findDayIndex(state, action.payload.id)
      state.splice(dayIndex, 1)
    },
    addExercise: (
      state,
      action: PayloadAction<{ dayId: string } & Omit<exercise, 'id'>>
    ) => {
      const { dayId, name, rep, series } = action.payload
      const dayIndex = findDayIndex(state, dayId)

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
      const { dayId, id } = action.payload
      const day = findDay(state, dayId)
      const exerciseIndex = findExerciseIndex(state, dayId, id)

      day.exercises.splice(exerciseIndex, 1)
    },
    updateExercise: (
      state,
      action: PayloadAction<{ dayId: string } & Partial<exercise>>
    ) => {
      const { dayId, id } = action.payload

      if (id) {
        const exercise = findExercise(state, dayId, id)
        const day = findDay(state, dayId)
        const updatedExercise = { ...exercise, ...action.payload }
        const exerciseIndex = findExerciseIndex(state, dayId, id)

        day.exercises[exerciseIndex] = updatedExercise
      }
    },
  },
})

const findDayIndex = (state: TrainingPlansState, id: string) => {
  const dayIndex = state.findIndex((day) => day.id === id)

  if (dayIndex > -1) {
    return dayIndex
  } else {
    throw `Day id: <${id}> not found`
  }
}

const findDay = (state: TrainingPlansState, id: string) => {
  const dayIndex = findDayIndex(state, id)

  return state[dayIndex]
}

const findExerciseIndex = (
  state: TrainingPlansState,
  dayId: string,
  exerciseId: string
) => {
  const day = findDay(state, dayId)
  const exerciseIndex = day.exercises.findIndex(
    (exercise) => exercise.id === exerciseId
  )

  if (exerciseIndex > -1) {
    return exerciseIndex
  } else {
    throw `Exercise id: <${exerciseId}> not found`
  }
}

const findExercise = (
  state: TrainingPlansState,
  dayId: string,
  exerciseId: string
) => {
  const dayIndex = findDayIndex(state, dayId)
  const exerciseIndex = findExerciseIndex(state, dayId, exerciseId)

  return state[dayIndex].exercises[exerciseIndex]
}

export const {
  addDay,
  deleteDay,
  addExercise,
  deleteExercise,
  updateExercise,
} = trainingPlansSlice.actions

export default trainingPlansSlice.reducer
