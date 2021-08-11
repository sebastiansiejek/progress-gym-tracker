import { render } from '@testing-library/react'
import React from 'react'
import TrainingPlans, { TrainingPlansProps } from './TrainingPlans'

describe('TrainingPlans', () => {
  const defaultProps: TrainingPlansProps = {}

  it('should render', () => {
    const props = { ...defaultProps }
    const { asFragment, queryByText } = render(<TrainingPlans {...props} />)

    expect(asFragment()).toMatchSnapshot()
    expect(queryByText('TrainingPlans')).toBeTruthy()
  })
})
