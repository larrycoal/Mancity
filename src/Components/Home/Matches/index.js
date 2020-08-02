import React from 'react';
import {Tag} from '../../ui/misc'
import Block from './Block'
const MatchesHome = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag
                background="#0e1731"
                color="#ffffff"
                fontSize="50px"
                >
                    Matches
                </Tag>
               <Block/>
                <Tag
                background="#ffffff"
                color="#0e1731"
                size="22px"
                linkTo="/the_team"
                link={true}
                >
                    see more matches
                </Tag>
            </div>
        </div>
    );
};

export default MatchesHome;