import { render } from '@testing-library/react';
import React from 'react';
import TrainingDays, { TrainingDaysProps } from './TrainingDays';

describe('TrainingDays', () => {
    const defaultProps: TrainingDaysProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<TrainingDays {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('TrainingDays')).toBeTruthy();
    });
});
