import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Search from "../search";
import UniversalSelect from "../universal-select";
import {VideoPlatforms} from "../../app/video-platforms";
import {fetchPopular, selectHeader} from "./header.slice";
import { setVideoPlatform } from "./header.slice"
import {YoutubeService} from "../../api/youtube.service";

import styles from './header.module.scss';
import {useEffect} from "react";

export interface HeaderProps {

}

const Header: React.FC< HeaderProps > = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchPopular());
    },[]);

    const exampleHistory = ['the do', 'christmas'];

    const handleSelect = ( option: VideoPlatforms) => {
        dispatch(setVideoPlatform(option));
    }

    const handleSubmit = async ( searchPhrase: string ) => {
        const service = new YoutubeService('AIzaSyDWfuBLRCtHUWiukBWNGHtZBcs7kpTfkWY');
        const res = await service.search(searchPhrase);
        console.log(res);
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
