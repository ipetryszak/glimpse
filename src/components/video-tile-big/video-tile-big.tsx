import * as React from 'react';
import {useState} from "react";
import {useHistory} from "react-router-dom";

import Rectangle from "../../skeletons/rectangle";

import styles from './video-tile-big.module.scss';

export interface VideoTileBigProps {
}

const VideoTileBig: React.FC< VideoTileBigProps > = () => {
    let history = useHistory();

    const [loaded, setLoaded] = useState(false);

    return (
        <h1>VideoTileBig</h1>
    )
};

export default VideoTileBig;
