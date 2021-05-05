import * as React from 'react';
import Search from "../search";
import UniversalSelect from "../universal-select";
import {VideoPlatforms} from "../../app/video-platforms";

import styles from './header.module.scss';

export interface HeaderProps {

}

const Header: React.FC< HeaderProps > = () => {
    const exampleHistory = ['the do', 'christmas'];

    const onSelect = ( option: VideoPlatforms) => {

    }

    return (
        <div className={styles.header}>
            <h1>glimpse</h1>
            <div>
                <UniversalSelect options={ Object.values(VideoPlatforms) } onSelect={ onSelect } />
                <Search onSubmit={(search: any)=>{console.log(search)}} history={exampleHistory} />
            </div>
        </div>
    )
};

export default Header;
