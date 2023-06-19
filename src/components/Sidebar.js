import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem';
import '../styles/Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import WindowIcon from '@mui/icons-material/Window';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom';
export default function Sidebar() {
  const navigate = useNavigate();
  const [role, setRole] = useState("manager");
  /*useEffect(() => {
    navigate('/order');
  })*/
  const customer = [
    { id: 1, icon: <HomeIcon sx={{ fontSize: 40, fill: "#F0FFF1" }} /> },
    { id: 2, icon: <WindowIcon sx={{ fontSize: 40, fill: "#F0FFF1" }} /> },
    { id: 3, icon: <StoreIcon sx={{ fontSize: 40, fill: "#F0FFF1" }} /> },
    { id: 4, icon: <PeopleIcon sx={{ fontSize: 40, fill: "#F0FFF1" }} /> },
    { id: 5, icon: <DynamicFeedIcon sx={{ fontSize: 40, fill: "#F0FFF1" }} /> },
  ];
  const manager = [
    { id: 1, icon: <HomeIcon sx={{ fontSize: 40, fill: "#F0FFF1" }} />, link: "home" },
    { id: 2, icon: <WindowIcon sx={{ fontSize: 40, fill: "#F0FFF1" }} />, link: "order" },
  ];
  const navigateTo = (page) => {
    if (page == "home") {
      navigate('');
    } else {
      navigate('/' + page);
    }
  }
  return (
    <div className='sidebar' onSelect={(item) => console.log(item)}>
      <div>
        {role == "customer" ? customer.map((item) => (
          <MenuItem key={item.id} icon={item.icon} fun={navigateTo} link={item.link} />
        )) : manager.map((item) => (
          <MenuItem key={item.id} icon={item.icon} fun={navigateTo} link={item.link} />
        ))}
      </div>

    </div>
  )
}