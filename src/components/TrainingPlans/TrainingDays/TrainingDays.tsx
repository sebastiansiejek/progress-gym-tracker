import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Text, Button, Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { addDay, deleteDay } from '../../../store/reducers/trainingPlans'
import { RootState } from '../../../store/store'
import DayExercises from '../DayExercises'

export interface TrainingDaysProps {}

const TrainingDays: React.FunctionComponent<TrainingDaysProps> = ({}) => {
  const trainingPlans = useSelector((state: RootState) => state.trainingPlans)

  const dispatch = useDispatch()

  return (
    <SafeAreaView>
      {trainingPlans.map(({ id }, index) => (
        <SafeAreaView
          key={index}
          style={{
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Text
              h3
              style={{
                textAlign: 'center',
                marginBottom: 15,
              }}
            >
              Day {index + 1}
            </Text>
            <Icon
              color="red"
              name="delete"
              onPress={() => {
                dispatch(
                  deleteDay({
                    id,
                  })
                )
              }}
              accessibilityLabel="Click to remove day"
            />
          </View>
          <DayExercises />
        </SafeAreaView>
      ))}
      <Button
        style={{
          marginTop: 20,
        }}
        icon={<Icon name="add" color="white" />}
        onPress={() => {
          dispatch(
            addDay({
              name: '',
            })
          )
        }}
        title="Add training day"
        accessibilityLabel="Click to add training day"
      />
    </SafeAreaView>
  )
}

export default TrainingDays
