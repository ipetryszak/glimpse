import * as React from 'react';
import styles from './search.module.scss';

export interface SearchProps {
}

const Search: React.FC< SearchProps > = props => {
    return (
        <form>
            <input className={styles.input}
                      type="text"
                      name="search"
                      placeholder="Search"
                      autoComplete="off"
            />
            <input type="button"
                   className={styles.buttonCancel}
                   onClick={()=>{console.log("elo")}}
            />
            <input type="button"
                   className={styles.buttonSearch}
                   onClick={()=>{console.log("elo")}}
            />
        </form>
)
};

export default Search;
