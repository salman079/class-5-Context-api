import React from 'react';
import Child2 from './Child2';

const Child = (props) => {
    return(
        <div>
            <h1>This is child component in child.js called by Parent and then by App.js variable pass = {props.name1}</h1>
            {/* {name3=name1+"yahoo"}; */}
            <Child2 name2={props.name1}/>
        </div>
    )
}

export default Child;
