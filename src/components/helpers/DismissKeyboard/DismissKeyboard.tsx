import React from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

export interface DismissKeyboardProps {}

const DismissKeyboard: React.FunctionComponent<DismissKeyboardProps> = ({
  children,
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )
}

export default DismissKeyboard
