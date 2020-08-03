import React from 'react';
import Featured from './Featured'
import Matches from './Matches'
import MeetPlayers from './MeetPlayers'
import Promotions from './Promotions'
const Home = () => {
    return (
        <div className="bck_blue" style={{width:"100%"}}>
            <Featured/>
           <Matches/>
           <MeetPlayers/>
           <Promotions/>
        </div>
    );
};

export default Home;