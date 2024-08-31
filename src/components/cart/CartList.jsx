import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import Checkout from "./Checkout";
import CartCard from "./CartCard";

const CartList = () => {
  const { cart } = useSelector((state) => state.cartItems);
console.log(cart)
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className="mt-20">
              <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-lg:max-w-3xl mx-auto">
                <div className="lg:col-span-2 bg-white divide-y divide-gray-300 px-4">
                  {cart.map((item) => (
                    <CartCard key={item.id} item={item} />
                  ))}
                </div>
                <Checkout />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartList;
