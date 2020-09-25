import React from 'react';
import Child from '../Components/Child';
import ChildReducer from '../Reducer/ChildReducer';

const Parent = (props) => {
    return (
        <div>
            <Child name1={props.name} />
            <p>Reducer used from Parent.js </p>
            <ChildReducer />
        </div>
    )
}

export default Parent;