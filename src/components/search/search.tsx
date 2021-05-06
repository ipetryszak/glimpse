import * as React from 'react';
import styles from './search.module.scss';
import {useState} from "react";

export interface SearchProps {
    onSubmit: Function,
    history?: string[],
    limitHistory: number
}

const Search: React.FC< SearchProps > = ( { onSubmit, history }, limitHistory ) => {

    const [search, setSearch] = useState('');

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if(search.length) onSubmit(search);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className={styles.input}
                   aria-label="search input"
                   type="text"
                   name="search"
                   list="history"
                   placeholder="Search"
                   value={search}
                   autoComplete="off"
                   onChange={ e => setSearch(e.target.value)}
            />
            <datalist id="history"
                      aria-label="search history list">
                {
                    history && (
                        history.slice(0, limitHistory).map(
                            (entrance, index) => ( <option value={entrance} key={index}/> )
                        )
                    )
                }
            </datalist>
            {
                !!search.length && (
                    <input type="button"
                           aria-label="clear button"
                           className={styles.buttonCancel}
                           onClick={ () => setSearch('') }
                    />
                )
            }

            <input type="button"
                   aria-label="search button"
                   className={styles.buttonSearch}
                   onClick={ () => onSubmit(search) }
                   disabled = { !search.length }
            />
        </form>
)
};

export default Search;
