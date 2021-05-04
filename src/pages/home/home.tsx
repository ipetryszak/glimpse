import * as React from 'react';
import styles from './home.module.css';

export interface HomeProps {
}

const Home: React.FC< HomeProps > = props => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;
