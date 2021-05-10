import React from 'react';
import { render, screen } from '@testing-library/react';
import {createMemoryHistory} from "history";
import {Router} from "react-router";
import { Provider } from 'react-redux';

import Home from './search'
import {store} from "../../app/store";



test('should renders search component properly', () => {
    const history = createMemoryHistory();

    render(
        <Provider store={store}>
            <Router history={history}>
                <Home />
            </Router>
        </Provider>);
    const textElement = screen.getByLabelText(/search view/i);
    expect(textElement).toBeInTheDocument();
});
