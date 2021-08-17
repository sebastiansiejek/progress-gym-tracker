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
import Swipeout from 'react-native-swipeout'

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
      {dayExercises?.map(({ id, name, rep, series }, index) => (
        <SafeAreaView key={index}>
          <Text
            h4
            style={{
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            Exercise {index + 1}
          </Text>
          <Swipeout
            right={[
              {
                text: 'Delete',
                type: 'delete',
                onPress: () => {
                  dispatch(deleteExercise({ dayId, id }))
                },
              },
            ]}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#fff',
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
                  value={name}
                  defaultValue={name}
                  label="Name"
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
                  placeholder="Rep"
                  label="Rep"
                  value={`${rep}`}
                  defaultValue={`0`}
                  keyboardType="numeric"
                  onChangeText={(value) => {
                    dispatch(
                      updateExercise({
                        dayId,
                        id,
                        rep: parseInt(value, 10),
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
                  placeholder="Series"
                  label="Series"
                  value={`${series}`}
                  defaultValue={`0`}
                  keyboardType="numeric"
                  onChangeText={(value) => {
                    dispatch(
                      updateExercise({
                        dayId,
                        id,
                        series: parseInt(value, 10),
                      })
                    )
                  }}
                />
              </View>
            </View>
          </Swipeout>
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
