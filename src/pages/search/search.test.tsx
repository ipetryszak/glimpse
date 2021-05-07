import React from 'react';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import Home from './search'
import {store} from "../../app/store";


test('should renders home component properly', () => {
    render(
        <Provider store={store}>
            <Home />
        </Provider>);
    const textElement = screen.getByText(/Trending now/i);
    expect(textElement).toBeInTheDocument();
});
