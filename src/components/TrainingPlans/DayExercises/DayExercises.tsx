import React from 'react'
import { SafeAreaView } from 'react-native'
import { useImmer } from 'use-immer'
import { Input, Button } from 'react-native-elements'

export interface DayExercisesProps {}

const DayExercises: React.FunctionComponent<DayExercisesProps> = ({}) => {
  const [fields, setField] = useImmer<Array<{ name: string }>>([])

  return (
    <SafeAreaView>
      {fields.map((field, index) => (
        <SafeAreaView
          key={index}
          style={{
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          <Input
            label={index + 1}
            placeholder="Exercise"
            onChangeText={(value) => {
              setField((draft) => {
                draft[index] = {
                  name: value,
                }
              })
            }}
          />
          <Button
            onPress={() => {
              setField((draft) => {
                draft.splice(index, 1)
              })
            }}
            title="Remove exercise"
            accessibilityLabel="Click to remove exercise"
          />
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
        title="Add new exercise"
        accessibilityLabel="Click to add new exercise"
      />
    </SafeAreaView>
  )
}

export default DayExercises
