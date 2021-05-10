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

    const { searchResult, nextPageToken, loading } = useSelector(selectHeader);
    const [ref, inView] = useInView();

    useEffect( () => {
        dispatch( search({ phrase: queryString.parse(location.search)['?q'] }));
    }, [location])

    useEffect( () => {
        if(inView) dispatch(search(
            {
                phrase: queryString.parse(location.search)['?q'],
                nextPageToken: nextPageToken,
            } ));
    }, [inView])


    let NUMBER_OF_ELEMENTS = 5;

     return (
        <main className={styles.container}>
            { searchResult.map((el: IVideoExtended, idx: number) => (
                    <div key={idx} ref={ searchResult.length - 1 === idx ? ref : null}>
                        <VideoTileBig videoData={el}/>
                    </div>
                ))
            }
            { loading && [...Array(NUMBER_OF_ELEMENTS)].map((el, idx) => (
                    <div key={idx}>
                        <SkeletonVideoTileBig/>
                    </div>)
                )
            }
        </main>

    );
};

export default Search;
