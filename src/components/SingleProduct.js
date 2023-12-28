import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { generateAmountOptions } from "../utils";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

const SingleProduct = ({ product }) => {
  const { title, price, images, description } = product;

  const [amount, setAmount] = useState(1);

  const user = useSelector((state) => state.userState.user);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const dispatch = useDispatch();
  const image = images[0];

  const cartProduct = {
    cartID: product.id,
    productID: product.id,
    image,
    title,
    price,
    amount,
    description,
  };

  const addToCart = () => {
    if (user) {
      dispatch(addItem({ product: cartProduct }));
      return;
    }
    toast.warn("You must be logged in to add to cart");
    return redirect("/login");
  };

  return (
    <div style={{ marginBottom: "70px" }}>
      <div>
        <div
          key={product.id}
          className="card"
          onClick={() =>
            document.getElementById(`my_modal_${product.id}`).showModal()
          }
        >
          {/* IMAGE */}
          <img src={image} alt={title} className="w-40 h-40" />

          {/* PRODUCT */}
          <div>
            <h1 className="capitalize text-3xl font-bold">{title}</h1>
          </div>
        </div>
      </div>
      {/* AMOUNT */}
      <div className="form-control w-full max-w-xs">
        <label className="label" htmlFor="amount">
          <h4 className="text-md font-medium -tracking-wider capitalize">
            amount
          </h4>
        </label>
        <select
          className="select select-secondary select-bordered select-md"
          id="amount"
          value={amount}
          onChange={handleAmount}
        >
          {generateAmountOptions(20)}
        </select>
        <div>
          <b>price : {price}</b>
        </div>
        <div>
          <button className="btn btn-success" onClick={addToCart}>
            Add to cart
          </button>
        </div>

        <dialog id={`my_modal_${product.id}`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{title}</h3>
            <img
              src={images[0]}
              alt={title}
              className="rounded-xl h-64 md:h-48 object-cover"
            />
            <p className="py-4">{product.description}</p>
            <b>Price : {price}</b>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default SingleProduct;
