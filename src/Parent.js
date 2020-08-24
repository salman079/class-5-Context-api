import React from 'react';
import Child from './Child';
import ChildReducer from './ChildReducer';

const Parent = (props) => {
    return (
        <div>
            <Child name1={props.name} />
            <h6>Reducer used from Parent.js </h6>
            <ChildReducer />
        </div>
    )
}

export default Parent;