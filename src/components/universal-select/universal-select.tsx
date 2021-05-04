import * as React from 'react';
import styles from './universal-select.module.scss';

export interface UniversalSelectProps {
    label?: string
    options: string[],
    onSelect: Function,
}

const UniversalSelect: React.FC< UniversalSelectProps > = ({options, label, onSelect}) => {

    return (
        <select className={styles.select}
                aria-label={label}
                onChange={ (e) => { onSelect(e.target.value) } }>
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
