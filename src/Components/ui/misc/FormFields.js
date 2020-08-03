import React from 'react';

const FormFields = ({formData,id,change}) => {
    let formTemplate =null
    switch(formData.element){
        case("input"):
        return(
           formTemplate= <input
           {...formData.config}
           value={formData.value}
           onChange={(e)=>change({e,id})}
           />
        )
     default:
        formTemplate=null
    }


    return formTemplate;
};

export default FormFields;