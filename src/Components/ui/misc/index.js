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
        Object.values(snapshot).forEach((childSnapshot,i)=>{
           data.push({
               ...childSnapshot,
               id:id[i]
           })
        })
       return data
}

export const validate = (element)=>{
     let error = [true,'']
     if(element.validation.email){
         const valid =/\S+@\S+\.\S+/.test(element.value)
         let message = !valid? "Must be an Email":""
         error=!valid?[valid,message]: error
     }
     if(element.validation.required){
         let valid = element.value.trim() !== ""
         let message = !valid? "This field is required":""
         error=!valid?[valid,message]: error
     }
     return error
}

