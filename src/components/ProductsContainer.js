import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';



const ProductsContainer = () => {
    const { products } = useLoaderData();


  return (
    <>
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          return (
            <SingleProduct product={product}/>
          );
        })}
      </div>
    </>
  );
}

export default ProductsContainer