import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import Search from './search'

describe('Search Component', () => {
    let onSubmit: Function;

    beforeEach(() => {
        onSubmit = jest.fn();
    });

    it('should render correctly', async () => {
        render( <Search onSubmit={onSubmit} /> );
        const el = await screen.findByPlaceholderText(/Search/i);
        expect(el).toBeInTheDocument();
    });

    it('should contain the history entrances', async () => {
        const searchHistory = ['funny cats', 'sn15 start', '80s music'];
        render( <Search onSubmit={onSubmit} history={searchHistory}/> );

        const el = await screen.findByLabelText('search history list');
        expect(el.children.length).toEqual(searchHistory.length);
    });

    it('should not fire onSubmit function when input is empty', async () => {
        const searchHistory = ['funny cats', 'sn15 start', '80s music'];
        render( <Search onSubmit={onSubmit} history={searchHistory}/> );

        const searchButton = await screen.findByLabelText('search button');
        searchButton.click();

        expect(onSubmit).toBeCalledTimes(0);
    });

    it('should fire onSubmit function once', async () => {
        const searchHistory = ['funny cats', 'sn15 start', '80s music'];
        render( <Search onSubmit={onSubmit} history={searchHistory}/> );

        const searchInput = await screen.findByPlaceholderText(/Search/i);
        const searchButton = await screen.findByLabelText('search button');

        fireEvent.change(searchInput, { target: { value: 'tesla' } })
        searchButton.click();

        expect(onSubmit).toBeCalledTimes(1);
    });
});
