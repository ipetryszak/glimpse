import * as React from 'react';
import Search from "../../components/search";

import styles from './home.module.css';

export interface HomeProps {
}

const Home: React.FC< HomeProps > = props => {
    return (
        <div>
            <h1>Home</h1>
            <Search />
        </div>
    );
};

export default Home;
