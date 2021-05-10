import * as React from 'react';
import styles from "../components/video-tile-big/video-tile-big.module.scss";
import Rectangle from "./rectangle";

export interface SkeletonVideoTileBigProps {}

const style = {
    margin: ".5rem 0",
    padding: "0"
}

const SkeletonVideoTileBig: React.FC< SkeletonVideoTileBigProps > = () => {
    return (
        <div className={styles.container}>
                <div>
                    <Rectangle height={225} width={300} />
                </div>
                <div>
                    <div style={style}>
                        <Rectangle height={40} width={500} />
                    </div>
                    <div style={style}>
                        <Rectangle height={30} width={400} />
                    </div>
                </div>
        </div>
    )
};

export default SkeletonVideoTileBig;
