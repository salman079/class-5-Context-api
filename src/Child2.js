import React, { useContext } from 'react';
import CounterContext1 from './CounterContext';

function Child2 (props){
    let CounterValue = useContext(CounterContext1);
    return(
        <div>
            <h2>This is Child2 function called in Child.js > Parent.js > App.js variable testing = {props.name2}</h2>
            {/* <h2>This is Child2 function called directly in App.js variable testing = {CounterValue}</h2> */}
            <h2>This is Child2 function called directly in App.js variable testing = {CounterValue[0]}</h2>
            <button onClick={()=>{CounterValue[1](++CounterValue[0] )}}>Increment</button>
            {/* <button onClick={()=>setCount(count-1)}> Subtraction   </button> */}

        </div>
    )
}
// const Child3 = () => {
//     return(
//         <h2> This is child 3 testing which is in Child2.js </h2>
//     )
// }
export default Child2;
// export default Child3;