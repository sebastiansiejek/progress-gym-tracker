import { ComponentType, ReactNode } from 'react'
import TrainingPlans from '../components/TrainingPlans'

const navigation: Array<{ name: string; component: ComponentType }> = [
  {
    name: 'Training plans',
    component: TrainingPlans,
  },
]

export default navigation
