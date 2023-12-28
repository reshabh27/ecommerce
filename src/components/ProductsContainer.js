import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';



const ProductsContainer = () => {
    const { products } = useLoaderData();
  return (
    <>
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const {  title, price, images } = product;
          return (
            <div>
                <div key={product.id} className="card" onClick={()=>document.getElementById(`my_modal_${product.id}`).showModal()}>
                    <figure className="px-4 pt-4">
                        <img src={images[0]} alt={title} className="rounded-xl h-64 md:h-48 w-full object-cover" />
                    </figure>
                    <div>
                        <h2> {title} </h2>
                        <span>{price}</span>
                    </div>
                </div>

                <div>
                    <button>Add to cart</button>
                </div>

                <dialog id={`my_modal_${product.id}`} className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{title}</h3>
                        <img src={images[0]} alt={title} className="rounded-xl h-64 md:h-48 w-full object-cover" />
                        <p className="py-4">{product.description}</p>
                        <b>Price : {price}</b>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductsContainer