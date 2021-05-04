import * as React from 'react';
import styles from './search.module.scss';
import {useState} from "react";

export interface SearchProps {
    handleSubmit: Function
}

const Search: React.FC< SearchProps > = ( {handleSubmit} ) => {

    const [search, setSearch] = useState('');

    return (
        <form>
            <input className={styles.input}
                   type="text"
                   name="search"
                   placeholder="Search"
                   value={search}
                   autoComplete="off"
                   onChange={ e => setSearch(e.target.value)}
            />

            {
                !!search.length && (
                    <input type="button"
                           className={styles.buttonCancel}
                           onClick={ () => setSearch('') }
                    />
                )
            }

            <input type="button"
                   className={styles.buttonSearch}
                   onClick={ () => handleSubmit(search) }
                   disabled = { !search.length }
            />

        </form>
)
};

export default Search;
