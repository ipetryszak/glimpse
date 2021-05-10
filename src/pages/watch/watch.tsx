import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import {selectHeader} from "../../components/header/header.slice";

import styles from './watch.module.scss'
import { useEffect } from "react";

export interface WatchProps {}

const Watch: React.FC< WatchProps > = props => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { searchResult, loading } = useSelector(selectHeader);

    useEffect( () => {
        // eslint-disable-next-line
    }, [location])

     return (
        <main className={styles.container} aria-label="search view">
            <h1>Watch view</h1>
        </main>

    );
};

export default Watch;
