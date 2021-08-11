import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Button, SafeAreaView, TextInput } from 'react-native'
import { useImmer } from 'use-immer'

export interface TrainingPlansProps {}

const TextInputStyled = styled(TextInput)`
  border-width: 1px;
  height: 40px;
  padding: 10px;
`

const TrainingPlans: React.FunctionComponent<TrainingPlansProps> = ({}) => {
  const [fields, setField] = useImmer<Array<{ name: string }>>([])

  useEffect(() => {
    console.log(fields)
  }, [fields])

  return (
    <SafeAreaView
      style={{
        margin: 20,
      }}
    >
      {fields.map((field, index) => (
        <SafeAreaView
          key={index}
          style={{
            marginBottom: 10,
          }}
        >
          <TextInputStyled
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
            color="red"
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

export default TrainingPlans
