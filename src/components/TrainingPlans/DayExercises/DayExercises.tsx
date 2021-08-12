import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { useImmer } from 'use-immer'
import { Input, Button, Text } from 'react-native-elements'
import { Icon } from 'react-native-elements/dist/icons/Icon'

export interface DayExercisesProps {}

const DayExercises: React.FunctionComponent<DayExercisesProps> = ({}) => {
  const [fields, setField] = useImmer<Array<{ name: string }>>([])

  const addField = () => {
    setField((draft) => {
      draft.push({
        name: '',
      })
    })
  }

  return (
    <SafeAreaView>
      {fields.map((field, index) => (
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
                onSubmitEditing={addField}
                onChangeText={(value) => {
                  setField((draft) => {
                    draft[index] = {
                      name: value,
                    }
                  })
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
        onPress={addField}
        title="Add exercise"
        accessibilityLabel="Click to add exercise"
        icon={<Icon name="add" color="white" />}
      />
    </SafeAreaView>
  )
}

export default DayExercises
