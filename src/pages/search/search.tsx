import * as React from 'react';
import * as queryString from "querystring";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import { useInView } from 'react-intersection-observer';

import {search, selectHeader} from "../../components/header/header.slice";

import SkeletonVideoTileBig from "../../skeletons/skeleton-video-tile-big";
import VideoTileBig from "../../components/video-tile-big";
import {IVideoExtended} from "../../models/youtube";

import styles from './search.module.scss'
import { useEffect } from "react";

export interface SearchProps {}

const Search: React.FC< SearchProps > = props => {
    const dispatch = useDispatch();
    const location = useLocation();

    const [ref, inView] = useInView();


    useEffect( () => {
        dispatch( search({ phrase: queryString.parse(location.search)['?q'] }));
    }, [location])

    useEffect( () => {
        console.log(inView);
        dispatch( search(
            {
                phrase: queryString.parse(location.search)['?q'],
                nextPageToken: nextPageToken,
            } ));
    }, [inView])


    let NUMBER_OF_ELEMENTS = 5;

    const { searchResult, nextPageToken, loading } = useSelector(selectHeader);

     return (
        <main className={styles.container}>
            {
                loading ? [...Array(NUMBER_OF_ELEMENTS)].map( (el, idx) => (
                        <div key={idx}>
                            <SkeletonVideoTileBig/>
                        </div>)
                    ) : (
                    searchResult.map((el: IVideoExtended, idx: number) => (
                        <div key={idx} ref={ searchResult.length - 1 === idx ? ref : null}>
                            <VideoTileBig videoData={el}/>
                        </div>
                    ))
                )
            }
        </main>

    );
};

export default Search;
