import React from 'react';
import Header from '../header_footer/Header'
import Footer from '../header_footer/Footer'
const HOC = (props) => {
    return (
        <div>
            <Header/>
           {props.children}
           <Footer/>
        </div>
    );
};

export default HOC;