import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'
import { useImmer } from 'use-immer'

export interface TrainingDaysProps {}

const TrainingDays: React.FunctionComponent<TrainingDaysProps> = ({}) => {
  const [fields, setField] = useImmer<Array<{ name: string }>>([])

  return (
    <>
      {fields.map((field, index) => (
        <SafeAreaView
          key={index}
          style={{
            marginBottom: 10,
          }}
        >
          <Text>{index + 1}</Text>
          <Button
            onPress={() => {
              setField((draft) => {
                draft.splice(index, 1)
              })
            }}
            color="red"
            title="Remove day"
            accessibilityLabel="Click to remove day"
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
        title="Add new day"
        accessibilityLabel="Click to add new day"
      />
    </>
  )
}

export default TrainingDays
