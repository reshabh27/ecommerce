import { useSelector } from "react-redux";

const CartTotals = () => {
  const { cartTotal } = useSelector((state) => state.cartState);

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* Order Total */}
        <p className="flex justify-between text-sm mt-4 pb-2">
          <span>Order Total</span>
          <span className="font-medium">{cartTotal}</span>
        </p>
      </div>
    </div>
  );
};
export default CartTotals;
