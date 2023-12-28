import { useDispatch, useSelector } from "react-redux";
import CartItemsList from "../components/CartItemList";
import CartTotals from "../components/CartTotals";
import { redirect, useNavigate } from "react-router-dom";
import { removeAllItem } from "../features/cart/cartSlice";
import ConfirmOrderModal from "../components/ConfirmModal";
import { toast } from "react-toastify";



export const loader = (store) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("You must be logged in to add to cart");
    return redirect("/login");
  }
  return null;
};



const Cart = () => {
  const user = useSelector((state) => state.userState.user);

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (numItemsInCart === 0) {
    return "Your cart is empty" ;
  }


  const handleConfirmation = () => {
    dispatch(removeAllItem());
    navigate('/');
  }


  return (
    <>
      <h1>Shopping Cart</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
            <button className="btn btn-primary btn-block mt-8" onClick={()=>document.getElementById('my_modal_3').showModal()}>proceed to checkout</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-lg">Confirmation page</h3>
                    <div className="py-4">
                        <ConfirmOrderModal/>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={handleConfirmation} className="btn btn-success">Confirm order</button>
                        </form>
                    </div>
                </div>
            </dialog>
           

            
        </div>
      </div>
    </>
  );
};
export default Cart;
