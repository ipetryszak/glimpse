import * as React from 'react';
import styles from './search.module.scss';

export interface SearchProps {
}

const Search: React.FC< SearchProps > = props => {
    return <input className={styles.input} type="text" name="search" placeholder="Search" />
};

export default Search;
