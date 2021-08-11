import React from 'react'
import { SafeAreaView, TextInput } from 'react-native'
import styled from 'styled-components'

export interface TrainingPlansProps {}

const TextInputStyled = styled(TextInput)`
  border-width: 1px;
  height: 40px;
  padding: 10px;
`

const TrainingPlans: React.FunctionComponent<TrainingPlansProps> = ({}) => {
  return (
    <SafeAreaView
      style={{
        margin: 20,
      }}
    >
      <TextInputStyled placeholder="Exercise" />
    </SafeAreaView>
  )
}

export default TrainingPlans
