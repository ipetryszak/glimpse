import * as React from 'react';
import styles from './universal-select.module.scss';

export interface UniversalSelectProps {
    options: string[],
    onSelect: Function
}

const UniversalSelect: React.FC< UniversalSelectProps > = ({options, onSelect}) => {

    return (
        <select className={styles.select} onChange={ (e) => { onSelect(e.target.value) } }>
            {
                !!options.length && (
                    options.map(
                        (option: string, index: number) => <option value={option}
                                                                   className={styles.option}
                                                                   key={index} >{option}</option>
                    )
                )
            }
        </select>
    )
};

export default UniversalSelect;
