import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Counter1 from './components/Counter1/counter1';
import useCounter from './components/Counter2/counter'

function App() {
  return (
    <div className="App">
      <Counter/>
      <Counter1/>
      <useCounter/>
    </div>
  );
}

export default App;
