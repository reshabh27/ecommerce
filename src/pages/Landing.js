import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div style={{backgroundImage:'linear-gradient(to right, #e84dd8, #c83bc8, #a829b9, #8816a8, #680098)'}} className='text-gray-50	'>
    <br /><br /><br />
      <h1 className="font-bold text-5xl	">Welcome to E-commerce website </h1>
    <br /><br />
      <article>Here you can view and order different product </article>
      <br /><br /><br />
      <div>
        <figure>
          <img
            src="https://magenticians.com/wp-content/uploads/2017/06/ecommerce-products.jpg"
            alt="products"
            className="mx-auto"
          />
        </figure>
      </div>
      <br /><br />
      <div>
        For more details visit on <Link to="/products">Products</Link> page
      </div>

      <br /><br /><br /><br /><br />
    </div>
  );
}

export default Landing