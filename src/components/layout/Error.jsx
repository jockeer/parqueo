import React from 'react'
const Error = ({clase,mensaje}) => {
    return ( 
        <p className={`alert ${clase}`}>{mensaje}</p>
     );
}
 
export default Error;