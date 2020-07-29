import React from 'react';
import chelseaLogo from '../../Resources/images/logos/manchester_city_logo.png'
import {Link} from 'react-router-dom'

export const Logo = (props) => {
   const template=()=>(
    <div className="img_cover" style={{
        height:props.height,
        width:props.width,
        backgroundImage:`url(${chelseaLogo})`
    }}>
    
    </div>
   )

   if(props.link){
       return(
        <Link to={props.linkTo} className="link_logo">  
          {template()}
        </Link>  
       )
   }else{
       return template()
   }
};

