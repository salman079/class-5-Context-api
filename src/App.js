import React ,{useState} from 'react';
import './App.css';
import Parent from './Parent';
import Child2 from './Child2';
// import Child3 from './Child2';
import CounterContext1 from './CounterContext';
import ChildReducer from './ChildReducer';

function App() {
  // let [count, SetCount] = useState(54)
  let count = useState(95)
  return (
    <CounterContext1.Provider value={count}>
      <div>
        <Parent name="Saloo Bhai" />
        <hr></hr>
        <p> now calling child2 in App.js thats why "Saloo Bahi" did not pass while due to Counter Context we passed 95</p>
        <Child2 />
        <h1>Reducer used from App.js</h1>
        <ChildReducer />
        <hr></hr>
        {/* <p> now calling child 3 form child2.js in App.js</p>
          <Child3 /> */}
      </div>
    </CounterContext1.Provider>
  );
}

export default App;