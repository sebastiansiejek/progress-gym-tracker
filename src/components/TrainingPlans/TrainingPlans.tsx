import React from 'react'
import { SafeAreaView } from 'react-native'
import DismissKeyboard from '../helpers/DismissKeyboard'
import TrainingDays from './TrainingDays'

export interface TrainingPlansProps {}

const TrainingPlans: React.FunctionComponent<TrainingPlansProps> = ({}) => {
  return (
    <DismissKeyboard>
      <SafeAreaView
        style={{
          margin: 20,
        }}
      >
        <TrainingDays />
      </SafeAreaView>
    </DismissKeyboard>
  )
}

export default TrainingPlans
