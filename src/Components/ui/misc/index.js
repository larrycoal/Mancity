import React from 'react';
import {Link} from 'react-router-dom'

export const Tag = (props) => {
   const template=()=>(
    <div style={{
        ...props,
        display:"inline-block",
        padding:"5px 10px",
        fontFamily:"Rigtheous"
    }}>
        {props.children}
    </div>
   )

   if(props.link){
       return(
        <Link to={props.linkTo}>  
          {template()}
        </Link>  
       )
   }else{
       return template()
   }
};

export const firbaseLooper =(snapshot)=>{
    let id=Object.keys(snapshot)
    let data =[]
    //console.log(id[0])
        Object.values(snapshot).forEach((childSnapshot,i)=>{
           data.push({
               ...childSnapshot,
               id:id[i]
           })
        })
       return data
}
