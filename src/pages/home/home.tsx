import * as React from 'react';
import {useSelector} from "react-redux";
import {selectHeader} from "../../components/header/header.slice";

import VideoTile from "../../components/video-tile";
import SkeletonVideoTile from "../../skeletons/skeleton-video-tile";

import styles from './home.module.scss'
import {IVideoExtended} from "../../models/youtube";

export interface HomeProps {}

const Home: React.FC< HomeProps > = props => {

    const NUMBER_OF_ELEMENTS = 24;

    const { popular, loading } = useSelector(selectHeader);

     return (
        <div className={styles.container}>
            <h1 className={styles.header}>Trending now</h1>
            <main>
                {
                    loading ? [...Array(NUMBER_OF_ELEMENTS)].map( (el, idx) => (
                        <div key={idx}>
                            <SkeletonVideoTile/>
                        </div>))
                        :
                        popular.data.map((el: IVideoExtended, idx: number) => (
                                <div key={idx}>
                                    <VideoTile videoData={el}/>
                                </div>
                        ))
                }
            </main>
        </div>

    );
};

export default Home;
