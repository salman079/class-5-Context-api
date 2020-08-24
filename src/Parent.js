import React from 'react';
import Child from './Child';

const Parent = (props) => {
    return(
        <Child name1={props.name}/>
    )
}

export default Parent;