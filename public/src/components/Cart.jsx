import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from './user-dashboard/Navbar';
import TrainerNavBar from './trainer-dashboard/TrainerNavbar';

const Cart = () => {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div>
      <style type="text/css">
        {`
        .temp {
          color: white
        }
      `}
      </style>
      <h1 className="temp">Checkout coming soon!</h1>
      {user.type === 'trainer' ? <TrainerNavBar /> : <NavBar />}
    </div>
  );
};

export default Cart;
