import { render } from '@testing-library/react';
import React from 'react';
import TextInput, { TextInputProps } from './TextInput';

describe('TextInput', () => {
    const defaultProps: TextInputProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<TextInput {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('TextInput')).toBeTruthy();
    });
});
