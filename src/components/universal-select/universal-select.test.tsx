import React from 'react';
import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react';
import UniversalSelect from './universal-select'

describe('UniversalSelect Component', () => {

    it('should render correctly', async () => {
        render( <UniversalSelect /> );
        const el = await screen.findByText(/UniversalSelect/i);
        expect(el).toBeInTheDocument();
    });
});
