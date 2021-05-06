import * as React from 'react';

import styles from './home.module.scss'
import VideoTile from "../../components/video-tile";

export interface HomeProps {
}

const Home: React.FC< HomeProps > = props => {

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Trending now</h1>
            <main>
                <VideoTile />
            </main>
        </div>

    );
};

export default Home;
