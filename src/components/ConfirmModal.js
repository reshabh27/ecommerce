import React from 'react'
import { useSelector } from 'react-redux';
import ConfirmModalList from './ConfirmModalList';

const ConfirmOrderModal = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  const user = useSelector((state) => state.userState);
  console.log(cartItems);

  return (
    <div>
      <div style={{ marginBottom: "40px" }}>
        <div className="md:bg-red-300 p-1 mb-2 mt-5 font-semibold	rounded-lg">Customer Name : {user.user.name}</div>
      
        <div className="md:bg-red-300 p-1 font-semibold	rounded-lg">Customer Email : {user.user.email}</div>
      </div>
      <br />
      <div>
        {cartItems.map((item) => {
          return <ConfirmModalList key={item.cartID} cartItem={item} />;
        })}
      </div>
    </div>
  );
}

export default ConfirmOrderModal