import * as React from 'react';

import styles from './home.module.scss'
import VideoTile from "../../components/video-tile";
import {useSelector} from "react-redux";
import {selectHeader} from "../../components/header/header.slice";

export interface HomeProps {
}

const Home: React.FC< HomeProps > = props => {

    const { popular, loading } = useSelector(selectHeader);

    if(loading) return <h1>loading...</h1>
    else return (
        <div className={styles.container}>
            <h1 className={styles.header}>Trending now</h1>
            <main>
                { popular.map( (el, idx) => (
                    <div key={idx} >
                        <VideoTile videoData={el}/>
                    </div>
                    )) }
            </main>
        </div>

    );
};

export default Home;
