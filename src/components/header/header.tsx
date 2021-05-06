import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from "react";

import Search from "../search";
import UniversalSelect from "../universal-select";

import {saveSearchEntryToLS} from "../../app/utils";
import { VideoPlatforms } from "../../app/video-platforms";
import {fetchPopular, selectHeader} from "./header.slice";
import { setVideoPlatform } from "./header.slice"

import styles from './header.module.scss';

const Header: React.FC = () => {

    const dispatch = useDispatch();
    const { selectedVideoPlatform } = useSelector(selectHeader);

    useEffect( () => {
        dispatch(fetchPopular());
    },[]);

    const exampleHistory = ['the do', 'christmas'];

    const handleSelect = ( option: VideoPlatforms) => {
        dispatch(setVideoPlatform(option));
    }

    const handleSubmit = async ( searchPhrase: string ) => {
        saveSearchEntryToLS(selectedVideoPlatform, searchPhrase);
    }

    return (
        <div className={styles.header}>
            <h1>glimpse</h1>
            <div>
                <UniversalSelect options={ Object.values(VideoPlatforms) } onSelect={ handleSelect } />
                <Search onSubmit={handleSubmit} history={exampleHistory} />
            </div>
        </div>
    )
};

export default Header;
