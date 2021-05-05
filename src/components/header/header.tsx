import * as React from 'react';
import Search from "../search";
import UniversalSelect from "../universal-select";

import styles from './header.module.scss';

export interface HeaderProps {

}

const Header: React.FC< HeaderProps > = () => {
    const exampleHistory = ['the do', 'christmas'];
    const videoProviders = ['YouTube', 'Vimeo'];

    return (
        <div className={styles.header}>
            <h1>glimpse</h1>
            <div>
                <UniversalSelect options={videoProviders} onSelect={(e: any) => {console.log(e)}} />
                <Search onSubmit={(search: any)=>{console.log(search)}} history={exampleHistory} />
            </div>
        </div>
    )
};

export default Header;
