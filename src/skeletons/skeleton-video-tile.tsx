import * as React from 'react';
import styles from "../components/video-tile/video-tile.module.scss";
import Rectangle from "./rectangle";

export interface SkeletonVideoTileProps {}

const SkeletonVideoTile: React.FC< SkeletonVideoTileProps > = () => {
    return (
        <div className={styles.container}>
            <Rectangle height={180} width={320} />
            <h1>
                <Rectangle height={25} width={320} />
            </h1>
            <h2>
                <Rectangle height={20} width={150} />
            </h2>
        </div>
    )
};

export default SkeletonVideoTile;
