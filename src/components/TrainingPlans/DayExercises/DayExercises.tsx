import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { useImmer } from 'use-immer'
import { Input, Button } from 'react-native-elements'
import { Icon } from 'react-native-elements/dist/icons/Icon'

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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 20,
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
            <Icon
              color="red"
              name="delete"
              onPress={() => {
                setField((draft) => {
                  draft.splice(index, 1)
                })
              }}
              accessibilityLabel="Click to remove exercise"
            />
          </View>
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
        title="Add exercise"
        accessibilityLabel="Click to add exercise"
      />
    </SafeAreaView>
  )
}

export default DayExercises
