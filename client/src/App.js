import React, { useState } from 'react'
import Button from './components/Button';
import Button2 from './components/Button2';
import { useSelector, useDispatch } from 'react-redux'
import './styles/App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './views/customer/Home';
import Order from './views/customer/Order';
import DeliveryHome from './views/delivery/DeliveryHome';
import DeliveryOrder from './views/delivery/DeliveryOrder';
import LandingPage from './views/landing/LandingPage';
import SignIn from './views/landing/SignIn';
import SignUp from './views/landing/SignUp';
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
  const guestRoutes = [];
  return (
    <div>
      {role === "customer" ?
        <BrowserRouter >
          <div className='outerContainer'>
            <Sidebar />
            <div className='container'>
              <Routes>
                {role === "customer" ? customerRoutes.map((item) => (
                  <Route key={item.id} path={item.path} element={item.element} ></Route>
                )) : deliveryRoutes.map((item) => (
                  <Route key={item.id} path={item.path} element={item.element} ></Route>
                ))}
                <Route path='' element={<Home />} ></Route>
                <Route path='/order' element={<Order />} ></Route>
              </Routes>
            </div>
          </div>
        </BrowserRouter> : <BrowserRouter >
          <Routes>
            <Route path='' element={<LandingPage />} ></Route>
            <Route path='/signin' element={<SignIn />} ></Route>
            <Route path='/signup' element={<SignUp />} ></Route>
          </Routes>
        </BrowserRouter>}


    </div>
  );
}

export default App;
