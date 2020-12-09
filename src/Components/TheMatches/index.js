import React, { Component } from 'react';
import { firebaseMatches } from '../../firebase';
import { firbaseLooper } from '../ui/misc';

import MatchesList from './matchesList'
import Table from './table'

class TheMatches extends Component {

    state = {
        loading:true,
        matches:[],
        filterMatches:[]
    }

    componentDidMount(){
        firebaseMatches.once("value").then((snapshot)=>{
            const matches = firbaseLooper(snapshot.val())
            this.setState({
                loading:false,
                matches
            })
        })
    }

    render() {
        return (
            <div className="the_matches_container">
                <div className="the_matches_wrapper">
                    <div className="left">
                        <MatchesList
                        matches = {this.state.matches}
                        />
                    </div>
                    <div classname="right">
                        <Table/>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default TheMatches;