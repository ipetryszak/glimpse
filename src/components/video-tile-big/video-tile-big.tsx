import * as React from 'react';
import {useState} from "react";
import {useHistory} from "react-router-dom";

import Rectangle from "../../skeletons/rectangle";
import {IVideo} from "../../models/youtube";

import styles from './video-tile-big.module.scss';

export interface VideoTileBigProps {
    videoData: IVideo
}

const VideoTileBig: React.FC< VideoTileBigProps > = ({videoData}) => {
    let history = useHistory();

    const [loaded, setLoaded] = useState(false);

    return (
        <>
            <h1>VideoTileBig</h1>
            {console.log(videoData)}
        </>

    )
};

export default VideoTileBig;
