import * as React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setFromHomepage, selectHeader} from "../../components/header/header.slice";

import VideoTile from "../../components/video-tile";
import SkeletonVideoTile from "../../skeletons/skeleton-video-tile";
import {IVideoExtended} from "../../models/youtube";
import {MAX_RESULTS_POPULAR} from "../../app/consts";

import styles from './home.module.scss'

export interface HomeProps {}

const Home: React.FC< HomeProps > = props => {

    const dispatch = useDispatch();

    const { popular, loading } = useSelector(selectHeader);

    useEffect( () => {
        dispatch(setFromHomepage(true));
    })

     return (
        <div className={styles.container}>
            <h1 className={styles.header}>Trending now</h1>
            <main>
                {
                    loading ? [...Array(MAX_RESULTS_POPULAR)].map( (el, idx) => (
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
