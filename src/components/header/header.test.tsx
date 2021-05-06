import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import { store } from "../../app/store";

import Header from './header'

describe('Header Component', () => {

    it('should render correctly', async () => {
        render(
            <Provider store={store}>
                <Header />
            </Provider>
            );

        const el = await screen.findByText("glimpse");
        expect(el).toBeInTheDocument();
    });
});
