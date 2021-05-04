import * as React from 'react';
import Search from "../../components/search";

export interface HomeProps {
}

const Home: React.FC< HomeProps > = props => {
    const exampleHistory = ['the do', 'christmas']
    return (
        <div>
            <h1>Home</h1>
            <Search onSubmit={(search: any)=>{console.log(search)}} history={exampleHistory}/>
        </div>
    );
};

export default Home;
