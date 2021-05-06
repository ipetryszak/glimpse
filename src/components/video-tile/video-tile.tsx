import * as React from 'react';
import {IPopularVideos} from "../../models/youtube";

import styles from './video-tile.module.scss';

export interface VideoTileProps {
    videoData: IPopularVideos
}

const VideoTile: React.FC< VideoTileProps > = ({videoData}) => {

    return (
        <div className={styles.container}>

            <img src={videoData?.thumbnail?.url} alt={videoData?.title}/>
            <h1>{videoData?.title}</h1>
            <h2>{videoData?.channelTitle}</h2>

            <p>
                { videoData?.statistics?.viewCount > 1000000 ?
                `${(Math.round(videoData?.statistics?.viewCount / 100000)/10)}M views`
                : videoData?.statistics?.viewCount > 999 ?
                    (`${(Math.round(videoData?.statistics?.viewCount / 100)/10)}k views`) :
                    (`${videoData?.statistics?.viewCount} views`)}
            </p>

        </div>

    )
};

export default VideoTile;
