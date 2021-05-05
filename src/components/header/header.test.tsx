import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import Header from './header'

describe('UniversalSelect Component', () => {

    beforeEach(() => {

    });

    it('should render correctly', async () => {
        render(<Header />);
        const el = await screen.findByText("Header");
        expect(el).toBeInTheDocument();
    });
});
