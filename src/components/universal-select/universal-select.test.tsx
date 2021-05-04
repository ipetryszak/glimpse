import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import UniversalSelect from './universal-select'

describe('UniversalSelect Component', () => {
    let onSelect: Function;
    const videoProviders = ['YouTube', 'Vimeo'];

    beforeEach(() => {
        onSelect = jest.fn();
    });

    it('should render correctly', async () => {
        render(<UniversalSelect options={videoProviders} onSelect={onSelect} />);
        const el = await screen.findByText(videoProviders[0]);
        expect(el).toBeInTheDocument();
    });

    it('should contain the options', async () => {
        render(<UniversalSelect options={videoProviders} onSelect={onSelect} label="select video platform"/>);
        const el = await screen.findByLabelText("select video platform");

        expect(el.children.length).toEqual(videoProviders.length);
    });

    it('should fire onSelect two times', async () => {
        render(<UniversalSelect options={videoProviders} onSelect={onSelect} label="select video platform"/>);
        const select = await screen.findByLabelText("select video platform");

        fireEvent.change(select, {
            target: { value: videoProviders[1] },
        });

        fireEvent.change(select, {
            target: { value: videoProviders[0] },
        });

        expect(onSelect).toBeCalledTimes(2);
    });
});
