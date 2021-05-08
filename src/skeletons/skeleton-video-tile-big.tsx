import * as React from 'react';
import styles from "../components/video-tile-big/video-tile-big.module.scss";
import Rectangle from "./rectangle";

export interface SkeletonVideoTileBigProps {}

const SkeletonVideoTileBig: React.FC< SkeletonVideoTileBigProps > = () => {
    return (
        <div className={styles.container}>
            <Rectangle height={225} width={300} />
            <div>
                <h1>
                    <Rectangle height={40} width={400} />
                </h1>
                    <Rectangle height={20} width={300} />
                <p>
                    <Rectangle height={30} width={400} />
                </p>
            </div>
        </div>
    )
};

export default SkeletonVideoTileBig;