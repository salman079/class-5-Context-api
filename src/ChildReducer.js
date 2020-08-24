import React , {useReducer} from 'react';
import CounterReducer from './CounterReducer';

const ChildReducer = () => {

    let [state, dispatch] = useReducer(CounterReducer, 10);

    return (
        <div>
            <h6> value of Reducer from state = {state}</h6>
            <button onClick={()=>{dispatch('INCREMENT')}}> Increment in Reducer</button>
            <button onClick={()=>{dispatch('DECREMENT')}}> Decrement in Reducer</button>


        </div>
    )
}

export default ChildReducer;