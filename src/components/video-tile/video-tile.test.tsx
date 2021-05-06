import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import VideoTile from './video-tile'
import {IPopularVideos} from "../../models/youtube";

const mockData: IPopularVideos = {
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
        render(<VideoTile videoData={mockData}/>);

        const el = await screen.findByText(mockData.channelTitle);
        expect(el).toBeInTheDocument();
    });
});
