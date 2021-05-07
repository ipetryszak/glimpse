import * as React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";

import Search from "../search";
import UniversalSelect from "../universal-select";

import {getSearchEntriesFromLS, saveSearchEntryToLS} from "../../app/utils";
import {VideoPlatforms} from "../../app/video-platforms";
import {fetchPopular, selectHeader, setVideoPlatform} from "./header.slice";

import styles from './header.module.scss';

const NUMBER_OF_SEARCH_HISTORY_ENTRIES = 10;

const Header: React.FC = () => {
    let history = useHistory();

    const dispatch = useDispatch();

    const { selectedVideoPlatform } = useSelector(selectHeader);
    const [searchHistory, setSearchHistory] = useState<string[]>( getSearchEntriesFromLS(VideoPlatforms.YouTube) );

    useEffect( () => {
        dispatch(fetchPopular());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const handleSelect = ( option: VideoPlatforms) => {
        dispatch(setVideoPlatform(option));
        setSearchHistory(getSearchEntriesFromLS(option));
    }

    const handleSubmit = async ( searchPhrase: string ) => {
        saveSearchEntryToLS(selectedVideoPlatform, searchPhrase);
        setSearchHistory( getSearchEntriesFromLS(selectedVideoPlatform) );
        history.push(`/search?q=${searchPhrase}`);
    }

    return (
        <div className={styles.header}>
            <h1 onClick={ () => history.push(`/`) }>glimpse</h1>
            <div>
                <UniversalSelect options={ Object.values(VideoPlatforms) } onSelect={ handleSelect } />
                <Search onSubmit={handleSubmit} history={searchHistory} limitHistory={NUMBER_OF_SEARCH_HISTORY_ENTRIES}/>
            </div>
        </div>
    )
};

export default Header;
