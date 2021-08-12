import { render } from '@testing-library/react';
import React from 'react';
import DayExercises, { DayExercisesProps } from './DayExercises';

describe('DayExercises', () => {
    const defaultProps: DayExercisesProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<DayExercises {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('DayExercises')).toBeTruthy();
    });
});
