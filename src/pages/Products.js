import React from 'react'
import ProductsContainer from '../components/ProductsContainer';
import { customFetch } from '../utils';


export const loader  = async () => {
    const response = await customFetch.get("/products");
    const products = response.data;
    console.log(products);
    return { products };
  };



const Products = () => {
  return (
    <div>
      <ProductsContainer />
    </div>
  );
}

export default Products