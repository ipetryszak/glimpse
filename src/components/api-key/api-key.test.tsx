import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import ApiKey from "./api-key";

describe('ApiKey Component', () => {

    it('should render correctly', async () => {
        render( <ApiKey /> );
        const el = await screen.findByText(/ApiKey/i);
        expect(el).toBeInTheDocument();
    });
});
