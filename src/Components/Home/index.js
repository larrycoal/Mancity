import React from 'react';
import Featured from './Featured'
import Matches from './Matches'
const Home = () => {
    return (
        <div className="bck_blue" style={{width:"100%"}}>
            <Featured/>
           <Matches/>
        </div>
    );
};

export default Home;