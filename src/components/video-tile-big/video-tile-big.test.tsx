import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import { createMemoryHistory } from "history";
import { Router } from "react-router";

import VideoTileBig from './video-tile-big'
import {IPopularVideo} from "../../models/youtube";

const mockData: IPopularVideo = {
            "id": "2_W2dfLIz24",
            "title": "EKIPA - CHILL",
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
        };

describe('VideoTile Component', () => {

    it('should render correctly', async () => {
        render(<VideoTileBig videoData={mockData}/>);

        const channelTitle = await screen.findByText(mockData.channelTitle);
        const title = await screen.findByText(mockData.title);

        expect(channelTitle).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    });

    it('should contain video thumbnail', async () => {
        render( <VideoTile videoData={mockData}/>);
        const thumbnail = await screen.findByRole('img');

        expect(thumbnail).toBeInTheDocument();
    });

    it('should display M views correctly', async () => {
        render(<VideoTile videoData={mockData}/>);

        const viewsM = await screen.findByText('8.6M views');

        expect(viewsM).toBeInTheDocument();
    });

    it('should display K views correctly', async () => {
        const mockDataCopy = { ...mockData };
        mockDataCopy.statistics.viewCount = 858812;
        render(<VideoTile videoData={mockDataCopy}/>);

        const viewsM = await screen.findByText('858.8k views');

        expect(viewsM).toBeInTheDocument();
    });

    it('should display views correctly', async () => {
        const mockDataCopy = { ...mockData };
        mockDataCopy.statistics.viewCount = 85;
        render(<VideoTile videoData={mockDataCopy}/>);

        const viewsM = await screen.findByText('85 views');

        expect(viewsM).toBeInTheDocument();
    });

    it('should onClick take to /watch/:id', async () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <VideoTile videoData={mockData}/>
            </Router>);
        const tile = await screen.findByLabelText('video tile');

        tile.click();

        expect(history.location.pathname).toBe(`/watch/${mockData.id}`);
    });
});
