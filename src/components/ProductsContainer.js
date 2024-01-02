import React from 'react'
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';



const ProductsContainer = () => {
    const { products } = useLoaderData();


  return (
    <>
    <br /><br />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {products.map((product) => {
          return <SingleProduct key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default ProductsContainer