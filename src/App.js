import React from 'react'
import Button from './components/Button';
import Button2 from './components/Button2';
import { useSelector, useDispatch } from 'react-redux'
import './styles/App.css';
import Sidebar from './components/Sidebar';
function App() {
  console.log(useSelector(state => state))
  const number = useSelector(state => state.CounterReducer.counter);
  const val = useSelector(state => state.ValueReducer.value)
  return (
    <div className="App">
      <div className='container'>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
