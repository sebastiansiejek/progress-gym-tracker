import React from 'react'
import { SafeAreaView } from 'react-native'
import TrainingDays from './TrainingDays'

export interface TrainingPlansProps {}

const TrainingPlans: React.FunctionComponent<TrainingPlansProps> = ({}) => {
  return (
    <SafeAreaView
      style={{
        margin: 20,
      }}
    >
      <TrainingDays />
    </SafeAreaView>
  )
}

export default TrainingPlans
