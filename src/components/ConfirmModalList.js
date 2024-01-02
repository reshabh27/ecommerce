import React from 'react'

const ConfirmModalList = ({ cartItem }) => {

  // console.log(cartItem);

   const { cartID, title, price, image, amount, description } = cartItem;
   

   return (
     <div key={cartID} className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0" >
       {/* IMAGE */}
       <img
         src={image}
         alt={title}
         className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
       />

       {/* INFO */}
       <div className="sm:ml-16 sm:w-48">

         {/* TITLE */}
         <h3 className="capitalize font-medium">{title}</h3>
         <br />
         <p>{description}</p>
       </div>

       <div className="sm:ml-12">
         {/* AMOUNT */}
         <div className="form-control max-w-xs">
           <div className="label p-0">
             <span className="label-text">Amount : {amount}</span>
           </div>
         </div>
       </div>

       {/* PRICE */}
       <p className="font-medium sm:ml-auto"> Price : {price} Rs per item</p>
     </div>
   );
}

export default ConfirmModalList 