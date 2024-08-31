import React from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../feature/cartSlice";

const CartCard = ({ item }) => {

  const dispatch = useDispatch();
  return (
    <div className="grid md:grid-cols-4 items-center gap-4 py-4">
      <div className="col-span-2 flex items-center gap-6">
        <div className="w-28 h-28 shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-800">{item.title}</h3>
          <h6 className="text-sm text-gray-500 mt-1">
            Color: <span className="ml-2 font-semibold">Black</span>
          </h6>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => dispatch(decreaseQuantity(item.id))}
          className="flex items-center justify-center w-8 h-8"
        >
          <FaMinus className="w-3 h-3" />
        </button>
        <span className="font-bold text-sm leading-[18px]">
          {item.quantity}
        </span>
        <button
          type="button"
          onClick={() => dispatch(increaseQuantity(item.id))}
          className="flex items-center justify-center w-8 h-8"
        >
          <FaPlus className="w-3 h-3" />
        </button>
      </div>

      <div className="flex items-center">
        <h4 className="text-base font-bold text-gray-800">
          ${(item.price * item.quantity).toFixed(2)}
        </h4>
        <button
          type="button"
          onClick={() => dispatch(removeFromCart(item.id))}
          className="ml-auto text-gray-400 hover:text-red-500"
        >
          <FaTrash className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
