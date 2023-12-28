import { useSelector } from "react-redux";
import CartItemsList from "../components/CartItemList";
import CartTotals from "../components/CartTotals";

const Cart = () => {
  const user = useSelector((state) => state.userState.user);

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return "Your cart is empty" ;
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
            {/* <button className="btn btn-primary btn-block mt-8">
              proceed to checkout
            </button> */}
            <button className="btn btn-primary btn-block mt-8" onClick={()=>document.getElementById('my_modal_3').showModal()}>proceed to checkout</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Confirmation page</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
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
