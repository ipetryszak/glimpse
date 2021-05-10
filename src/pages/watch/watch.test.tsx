import React from 'react';
import { render, screen } from '@testing-library/react';
import {createMemoryHistory} from "history";
import {Router} from "react-router";
import { Provider } from 'react-redux';

import {store} from "../../app/store";
import Watch from "./watch";


test('should renders watch component properly', () => {
    const history = createMemoryHistory();

    render(
        <Provider store={store}>
            <Router history={history}>
                <Watch />
            </Router>
        </Provider>);
    const textElement = screen.getByLabelText(/watch view/i);
    expect(textElement).toBeInTheDocument();
});
