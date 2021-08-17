import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import DismissKeyboard from '../helpers/DismissKeyboard'
import TrainingDays from './TrainingDays'

export interface TrainingPlansProps {}

const TrainingPlans: React.FunctionComponent<TrainingPlansProps> = ({}) => {
  return (
    <DismissKeyboard>
      <ScrollView>
        <SafeAreaView
          style={{
            margin: 20,
          }}
        >
          <TrainingDays />
        </SafeAreaView>
      </ScrollView>
    </DismissKeyboard>
  )
}

export default TrainingPlans
