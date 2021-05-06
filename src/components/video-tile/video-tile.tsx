import * as React from 'react';
import {IPopularVideos} from "../../models/youtube";

import styles from './video-tile.module.scss';

export interface VideoTileProps {
    videoData: IPopularVideos
}

const VideoTile: React.FC< VideoTileProps > = () => {

    return (
       <h1>VideoTile</h1>
    )
};

export default VideoTile;
