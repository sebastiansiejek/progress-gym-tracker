import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useDispatch, useSelector } from 'react-redux'
import {
  addExercise,
  deleteExercise,
  updateExercise,
} from '../../../store/reducers/trainingPlans'
import { RootState } from '../../../store/store'

export interface DayExercisesProps {
  dayId: string
}

const DayExercises: React.FunctionComponent<DayExercisesProps> = ({
  dayId,
}) => {
  const trainingPlans = useSelector((state: RootState) => state.trainingPlans)

  const dispatch = useDispatch()
  const dayExercises = trainingPlans.find(({ id }) => id === dayId)?.exercises

  return (
    <SafeAreaView>
      {dayExercises?.map(({ id }, index) => (
        <SafeAreaView key={index}>
          <Text
            h4
            style={{
              textAlign: 'center',
            }}
          >
            Exercise {index + 1}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flex: 2,
              }}
            >
              <Input
                autoFocus
                placeholder="Exercise"
                style={{
                  flex: 1,
                }}
                onSubmitEditing={() =>
                  dispatch(
                    addExercise({
                      dayId: dayId,
                      name: '',
                      rep: 0,
                      series: 0,
                    })
                  )
                }
                onChangeText={(value) => {
                  dispatch(
                    updateExercise({
                      dayId,
                      id,
                      name: value,
                    })
                  )
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <Input
                style={{
                  flex: 1,
                }}
                placeholder="Rep"
                keyboardType="numeric"
              />
            </View>
            <Icon
              color="red"
              name="delete"
              onPress={() => {
                dispatch(deleteExercise({ dayId, id }))
              }}
              accessibilityLabel="Click to remove exercise"
            />
          </View>
        </SafeAreaView>
      ))}
      <Button
        onPress={() =>
          dispatch(
            addExercise({
              dayId: dayId,
              name: '',
              rep: 0,
              series: 0,
            })
          )
        }
        title="Add exercise"
        accessibilityLabel="Click to add exercise"
        icon={<Icon name="add" color="white" />}
      />
    </SafeAreaView>
  )
}

export default DayExercises
