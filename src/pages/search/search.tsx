import * as React from 'react';
import { useEffect } from "react";
import * as queryString from "querystring";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import { useInView } from 'react-intersection-observer';

import {search, selectHeader, setFromHomepage} from "../../components/header/header.slice";
import SkeletonVideoTileBig from "../../skeletons/skeleton-video-tile-big";
import VideoTileBig from "../../components/video-tile-big";
import {IVideoExtended} from "../../models/videos";
import {MAX_RESULTS_SEARCH} from "../../app/consts";

import styles from './search.module.scss'

export interface SearchProps {}

const Search: React.FC< SearchProps > = props => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { searchResult, searchPhrase, selectedVideoPlatform, loading } = useSelector(selectHeader);
    const [ref, inView] = useInView();

    useEffect( () => {
        window.scrollTo(0, 0);
        const locationPhrase = queryString.parse(location.search)['?q'];
        if(locationPhrase !== searchPhrase ||
            searchResult.origin !== selectedVideoPlatform ) dispatch( search({ phrase: locationPhrase}));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    useEffect( () => {
        if(inView) dispatch(search(
            {
                phrase: queryString.parse(location.search)['?q'],
                nextPageToken: searchResult.nextPageToken,
            } ));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    useEffect( () => {
        dispatch(setFromHomepage(false));
    })

     return (
        <main className={styles.container} aria-label="search view">
            { searchResult.data.map((el: IVideoExtended, idx: number) => (
                    <div key={idx} ref={ searchResult.data.length - 1 === idx ? ref : null}>
                        <VideoTileBig videoData={el}/>
                    </div>
                ))
            }
            { loading && [...Array(MAX_RESULTS_SEARCH)].map((el, idx) => (
                    <div key={idx}>
                        <SkeletonVideoTileBig/>
                    </div>)
                )
            }
        </main>

    );
};

export default Search;
