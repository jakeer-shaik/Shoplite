import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({}) => {
  const [applyCoupen, setApplyCoupen] = useState(false);
  const [coupenDiscount, setCoupenDiscount] = useState(0);
  const { cart } = useSelector((state) => state.cartItems);
  const router=useNavigate()
  const handlerApplyCoupen = () => {
    setApplyCoupen(!applyCoupen);
  };
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = 10;
  const shipping = 2;
  const tax = 2;
  useEffect(() => {
    if (applyCoupen) {
      const discountApplied = (subtotal * 10) / 100;
      setCoupenDiscount(discountApplied);
    } else {
      setCoupenDiscount(0);
    }
  }, [applyCoupen, cart]);
  const totalPrice = subtotal + shipping + tax - discount - coupenDiscount;
  return (
    <>
      <div className="p-4 shadow-xl rounded-lg">
        <div className="bg-white p-1 mb-2 mx-auto">
          <h3 className="text-md font-bold text-gray-800 mb-4">
            Apply Coupon Code
          </h3>
          <p className="my-2 text-sm text-gray-600">
            Use this Discount Coupon to get 10% off on products.
          </p>
          {!applyCoupen ? (
            <div className="flex items-center border border-blue-600 rounded-lg">
              <span className="text-gray-800 text-sm font-medium pl-2">
                COUPON10
              </span>
              <button
                type="button"
                className="ml-auto text-blue-500 px-6 py-2 hover:underline"
                onClick={handlerApplyCoupen}
              >
                {applyCoupen ? "Remove" : "Add"}
              </button>
            </div>
          ) : (
            <div
              className="bg-green-400 text-white font-semibold flex items-center p-4 rounded-md shadow-md shadow-green-200 mx-auto w-max my-2"
              role="alert"
            >
              <FaCheckCircle className="w-[18px] shrink-0 rounded-full inline mr-3 bg-green-400" />
              <span className="block sm:inline text-sm mr-3">
                Discount applied successfully
              </span>
              <button onClick={handlerApplyCoupen}>
                <RxCross2 className="w-[18px] cursor-pointer shrink-0 fill-white ml-auto hover:text-gray-50" />
              </button>
            </div>
          )}
        </div>
        <ul className="text-gray-800 divide-y divide-gray-300">
          <li className="flex flex-wrap gap-4 text-sm pb-4 font-semibold">
            Subtotal <span className="ml-auto">${subtotal.toFixed(2)}</span>
          </li>
          <li className="flex flex-wrap gap-4 text-sm py-4 font-semibold">
            Shipping <span className="ml-auto">${shipping.toFixed(2)}</span>
          </li>
          <li className="flex flex-wrap gap-4 text-sm py-4 font-semibold">
            Tax <span className="ml-auto">${tax.toFixed(2)}</span>
          </li>
          <li className="flex flex-wrap gap-4 text-sm py-4 font-semibold">
            Discount <span className="ml-auto">${discount.toFixed(2)}</span>
          </li>
          <li className="flex flex-wrap gap-4 text-sm py-4 font-semibold">
            Coupen discount{" "}
            <span className="ml-auto">
              ${applyCoupen ? coupenDiscount.toFixed(2) : 0}
            </span>
          </li>
          <li className="flex flex-wrap gap-4 text-sm pt-4 font-bold">
            Total <span className="ml-auto">${totalPrice.toFixed(2)}</span>
          </li>
        </ul>

        <div className="flex justify-center mt-4">
          <button onClick={()=>router("/order")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Check out
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
