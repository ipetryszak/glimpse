import React from 'react';
import { render, screen } from '@testing-library/react';
import {createMemoryHistory} from "history";
import {Router} from "react-router";
import { Provider } from 'react-redux';

import {store} from "../../app/store";
import Search from "./search";



test('should renders search component properly', () => {
    const history = createMemoryHistory();

    render(
        <Provider store={store}>
            <Router history={history}>
                <Search />
            </Router>
        </Provider>);
    const textElement = screen.getByLabelText(/search view/i);
    expect(textElement).toBeInTheDocument();
});
