import React, { useState } from 'react'
import Button from './components/Button';
import Button2 from './components/Button2';
import { useSelector, useDispatch } from 'react-redux'
import './styles/App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/customer/Home';
import Order from './views/customer/Order';
import DeliveryHome from './views/delivery/DeliveryHome';
import DeliveryOrder from './views/delivery/DeliveryOrder';
function App() {
  const [role, setRole] = useState("customer");
  const number = useSelector(state => state.CounterReducer.counter);
  const val = useSelector(state => state.ValueReducer.value)
  const customerRoutes = [
    { id: 1, path: '', element: <Home /> },
    { id: 2, path: '/order', element: <Order /> },
  ];
  const deliveryRoutes = [
    { id: 1, path: '', element: <DeliveryHome /> },
    { id: 2, path: '/order', element: <DeliveryOrder /> },
  ];
  return (
    <BrowserRouter>
      <div className='outerContainer'>
        <Sidebar />
        <div className='containder'>
          <Routes>
            {role == "customer" ? customerRoutes.map((item) => (
              <Route key={item.id} path={item.path} element={item.element} ></Route>
            )) : deliveryRoutes.map((item) => (
              <Route key={item.id} path={item.path} element={item.element} ></Route>
            ))}
            <Route path='' element={<Home />} ></Route>
            <Route path='/order' element={<Order />} ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
