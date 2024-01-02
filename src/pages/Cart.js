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
  // const user = useSelector((state) => state.userState.user);

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  const cartTotal = useSelector((state) => state.cartState.cartTotal);

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
    <div style={{backgroundImage:'linear-gradient(to right, #e84dd8, #c83bc8, #a829b9, #8816a8, #680098)'}}>
    <br /><br />
      <h1 className="text-5xl	font-bold text-white">Shopping Cart</h1>
      <br /> <br /> <br />
      <div className="mt-8 grid gap-8 lg:grid-cols-12 w-11/12 place-items-center	">
        <div className="lg:col-span-12">
          <CartItemsList />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center	">
          <CartTotals />
        </div>

        {/* button for modal opening */}
        <button
          className="btn btn-primary btn-block mt-5 mb-10 w-4/5"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          proceed to checkout
        </button>

        {/* modal starts here */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <br /><br />
            <h3 className="font-bold text-4xl	p-5 md:bg-green-500 rounded-lg">Confirmation page</h3>
            <div className="py-4">
              <ConfirmOrderModal />
            </div>

            <div>
              Total order value : {cartTotal} Rs
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button
                  onClick={handleConfirmation}
                  className="btn btn-success"
                >
                  Confirm order
                </button>
              </form>
            </div>
          </div>
        </dialog>

      </div>
    </div>
  );
};
export default Cart;
