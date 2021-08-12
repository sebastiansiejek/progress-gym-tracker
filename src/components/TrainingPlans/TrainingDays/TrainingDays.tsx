import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Text, Button, Icon } from 'react-native-elements'
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
                setField((draft) => {
                  draft.splice(index, 1)
                })
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
