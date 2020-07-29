import React from 'react';
import Stripes from './stripes'
import Text from './text'
const featured = () => {
    return (
        <div className="featured_wrapper" style={{
            height:`${window.innerHeight}px`
        }}>
            <Stripes/>
            <Text/>
        </div>
    );
};

export default featured;