import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { addToCart } from "../../feature/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const { image, title, price, id } = product;
  const dispatch = useDispatch();
  const handlerCart=()=>{
    dispatch(addToCart(product))
    toast.success("Added to cart Successfully!")
  }
  return (
    <>
      <Toaster />
      <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
        <div className="px-1">
          <div>
            <div className="">
              <img
                src={image}
                alt={title}
                className="object-contain relative w-full h-64 lg:h-80"
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-md font-bold text-gray-800 mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <h4 className="text-md font-bold text-gray-800">
              ${price.toFixed(2)}
            </h4>
            <button
              onClick={handlerCart}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
