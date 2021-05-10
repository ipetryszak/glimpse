import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";

import {search, selectHeader} from "../../components/header/header.slice";

import styles from './watch.module.scss'
import { useEffect, useState} from "react";

export interface WatchProps {}

const Watch: React.FC< WatchProps > = props => {
    const dispatch = useDispatch();

    let { id } = useParams< {id: string} >();
    const { searchResult, popular, fromHomepage, searchPhrase, loading } = useSelector(selectHeader);
    const [index, setIndex] = useState<any>(null);

    useEffect( () => {
        let index: number;
        if(fromHomepage) {
            index = popular.data.findIndex(el => el.id === id);
        }
        else {
            index = searchResult.data.findIndex(el => el.id === id);
            if(!(searchResult.data[index+1]?.id)) dispatch(search(
                {
                    phrase: searchPhrase,
                    nextPageToken: searchResult.nextPageToken,
                }));
        }

        setIndex( index );
    },[id]);

    return (
        <main className={styles.container} aria-label="watch view">
            { index > 0 &&
            <Link to={`/watch/${fromHomepage ? popular.data[index-1].id : searchResult.data[index-1].id}`}
                  className={styles.button} />}
            <div>
                <iframe
                    width="853"
                    height="480"
                    src={fromHomepage ? popular.data[index]?.player : searchResult?.data[index]?.player}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Video Player"
                />
            </div>
            <Link to={`/watch/${fromHomepage ? popular.data[index+1].id :searchResult.data[index+1]?.id}`}
                  className={styles.button} />
        </main>
    );
};

export default Watch;
