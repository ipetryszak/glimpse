import * as React from 'react';
import Search from "../../components/search";
import UniversalSelect from "../../components/universal-select";

export interface HomeProps {
}

const Home: React.FC< HomeProps > = props => {
    const exampleHistory = ['the do', 'christmas'];
    const videoProviders = ['YouTube', 'Vimeo'];
    return (
        <div>
            <h1>Home</h1>
            <Search onSubmit={(search: any)=>{console.log(search)}} history={exampleHistory} />
            <UniversalSelect options={videoProviders} onSelect={(e: any) => {console.log(e)}} />
        </div>
    );
};

export default Home;
