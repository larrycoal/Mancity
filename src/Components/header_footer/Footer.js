import React from 'react';
import {Logo} from "../ui/icons"
const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="img_cover">
             <Logo
             height="70px"
             width="70px"
             link={true}
             linkTo="/"
             />
            </div>
            <div className="footer_discl">
                An App developed by LarryCoal
            </div>
        </footer>
    );
};

export default Footer;