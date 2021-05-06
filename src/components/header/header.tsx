import * as React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import Search from "../search";
import UniversalSelect from "../universal-select";

import {getSearchEntriesFromLS, saveSearchEntryToLS} from "../../app/utils";
import {VideoPlatforms} from "../../app/video-platforms";
import {fetchPopular, selectHeader, setVideoPlatform} from "./header.slice";

import styles from './header.module.scss';

const Header: React.FC = () => {

    const dispatch = useDispatch();

    const { selectedVideoPlatform } = useSelector(selectHeader);
    const [history, setHistory] = useState<string[]>( getSearchEntriesFromLS(VideoPlatforms.YouTube) );

    useEffect( () => {
        dispatch(fetchPopular());
    },[]);

    const handleSelect = ( option: VideoPlatforms) => {
        dispatch(setVideoPlatform(option));
        setHistory(getSearchEntriesFromLS(option));
    }

    const handleSubmit = async ( searchPhrase: string ) => {
        saveSearchEntryToLS(selectedVideoPlatform, searchPhrase);
        setHistory( getSearchEntriesFromLS(selectedVideoPlatform) );
    }

    return (
        <div className={styles.header}>
            <h1>glimpse</h1>
            <div>
                <UniversalSelect options={ Object.values(VideoPlatforms) } onSelect={ handleSelect } />
                <Search onSubmit={handleSubmit} history={history} />
            </div>
        </div>
    )
};

export default Header;
