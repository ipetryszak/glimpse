import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import VideoTile from './video-tile'

describe('VideoTile Component', () => {

    it('should render correctly', async () => {
        render(<VideoTile />);

        const el = await screen.findByText("VideoTile");
        expect(el).toBeInTheDocument();
    });
});
