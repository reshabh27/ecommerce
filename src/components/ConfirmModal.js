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
        customer name : {user.user.name}
        <br />
        customer email : {user.user.email}
      </div>
      <div>
        {cartItems.map((item) => {
          return <ConfirmModalList key={item.cartID} cartItem={item} />;
        })}
      </div>
    </div>
  );
}

export default ConfirmOrderModal