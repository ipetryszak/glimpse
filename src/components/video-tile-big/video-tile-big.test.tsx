import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import { createMemoryHistory } from "history";
import { Router } from "react-router";

import VideoTileBig from './video-tile-big'

const mockData = {
    nextPageToken: '',
    data: [
        {
            "id": "2_W2dfLIz24",
            "title": "EKIPA - CHILL",
            "description": "some description",
            "channelTitle": "EKIPA",
            "publishedAt": "2021-05-01T16:00:02Z",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/2_W2dfLIz24/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            "statistics": {
                "viewCount": 8588129,
                "likeCount": 578405,
                "dislikeCount": 19708
            }
        } ]
};

describe('VideoTileBig Component', () => {

    it('should render correctly', async () => {
        render(<VideoTileBig videoData={mockData.data[0]}/>);

        const title = await screen.findByText(mockData.data[0].title);

        expect(title).toBeInTheDocument();
    });
    it('should contain video thumbnail', async () => {
        render(<VideoTileBig videoData={mockData.data[0]}/>);
        const thumbnail = await screen.findByRole('img');

        expect(thumbnail).toBeInTheDocument();
    });

    it('should display views and channel', async () => {
        render(<VideoTileBig videoData={mockData.data[0]}/>);

        const viewsM = await screen.findByLabelText('views and channel')

        expect(viewsM).toBeInTheDocument();
    });

    it('should onClick take to /watch/:id', async () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <VideoTileBig videoData={mockData.data[0]}/>
            </Router>);
        const tile = await screen.findByLabelText('video tile');

        tile.click();

        expect(history.location.pathname).toBe(`/watch/${mockData.data[0].id}`);
    });
});
