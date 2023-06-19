import React from 'react'
import Button from './components/Button';
import Button2 from './components/Button2';
import { useSelector, useDispatch } from 'react-redux'
import './styles/App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Order from './views/Order';
function App() {
  console.log(useSelector(state => state))
  const number = useSelector(state => state.CounterReducer.counter);
  const val = useSelector(state => state.ValueReducer.value)
  return (
    <BrowserRouter>
      <div className='outerContainer'>
        <Sidebar />
        <div className='containder'>
          <Routes>
            <Route path='' element={<Home />} ></Route>
            <Route path='/order' element={<Order />} ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
