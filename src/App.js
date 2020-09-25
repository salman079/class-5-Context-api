import React, { useState } from 'react';
import './App.css';
import Parent from '../src/Components/Parent';
import Child2, { Child3 } from '../src/Components/Child2';
import CounterContext1 from '../src/Components/CounterContext';
import ChildReducer from '../src/Reducer/ChildReducer';

function App() {
  // let [count, SetCount] = useState(54)
  let count = useState(95)
  return (
    <CounterContext1.Provider value={count}>
      <div>
        <Parent name="Saloo Bhai" />
        end of parent<hr />
        <p> now calling child2 in App.js thats why "Saloo Bahi" did not pass now i passed new value Toooba Appi while due to Counter Context we passed 95</p>
        <Child2 name2="Tooba Appi" />end of child 2<hr />
        <h1>Reducer used from App.js</h1>
        <ChildReducer />
        end of Reducer <hr />
        <p> now calling child 3 form child2.js in App.js</p>
        <Child3 />
      </div>
    </CounterContext1.Provider>
  );
} 
   

export default App;