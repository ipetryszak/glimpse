import * as React from 'react';
import styles from './search.module.scss';
import {useState} from "react";

export interface SearchProps {
    handleSubmit: Function,
    history?: string[]
}

const Search: React.FC< SearchProps > = ( { handleSubmit, history } ) => {

    const [search, setSearch] = useState('');

    const handleFormSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if(search.length) handleSubmit(search);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input className={styles.input}
                   type="text"
                   name="search"
                   list="history"
                   placeholder="Search"
                   value={search}
                   autoComplete="off"
                   onChange={ e => setSearch(e.target.value)}
            />
            <datalist id="history">
                {
                    history && (
                        history.map(
                            (entrance, index) => ( <option value={entrance} key={index}/> )
                        )
                    )
                }
            </datalist>
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
