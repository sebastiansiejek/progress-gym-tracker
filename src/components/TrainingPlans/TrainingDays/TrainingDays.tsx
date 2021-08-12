import React from 'react'
import { SafeAreaView } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { useImmer } from 'use-immer'
import DayExercises from '../DayExercises'

export interface TrainingDaysProps {}

const TrainingDays: React.FunctionComponent<TrainingDaysProps> = ({}) => {
  const [fields, setField] = useImmer<Array<{ name: string }>>([])

  return (
    <SafeAreaView>
      {fields.map((field, index) => (
        <SafeAreaView
          key={index}
          style={{
            marginBottom: 20,
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
          <Button
            onPress={() => {
              setField((draft) => {
                draft.splice(index, 1)
              })
            }}
            title="Remove day"
            accessibilityLabel="Click to remove day"
          />
          <DayExercises />
        </SafeAreaView>
      ))}
      <Button
        onPress={() => {
          setField((draft) => {
            draft.push({
              name: '',
            })
          })
        }}
        title="Add training day"
        accessibilityLabel="Click to add training day"
      />
    </SafeAreaView>
  )
}

export default TrainingDays
