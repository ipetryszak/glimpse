import * as React from 'react';
import {useSelector} from "react-redux";
import {selectHeader} from "../../components/header/header.slice";

import SkeletonVideoTile from "../../skeletons/skeleton-video-tile";
import VideoTileBig from "../../components/video-tile-big";

import styles from './search.module.scss'

export interface SearchProps {}

const Search: React.FC< SearchProps > = props => {

    const NUMBER_OF_ELEMENTS = 5;

    const { search, loading } = useSelector(selectHeader);

     return (
        <main className={styles.container}>
            <VideoTileBig videoData={search[0]}/>
                {/*{
                    loading ? [...Array(NUMBER_OF_ELEMENTS)].map( (el, idx) => (
                        <div key={idx}>
                            <SkeletonVideoTile/>
                        </div>))
                        :
                        (youtubeSearch as IPopularVideos[]).map((el: IPopularVideos, idx: number) => (
                                <div key={idx}>
                                    <VideoTileBig videoData={el}/>
                                </div>
                        ))
                }*/}
        </main>

    );
};

export default Search;
