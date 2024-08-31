import React from "react";
import hero from '../../assets/hero.jpg'

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-5 lg:p-16 mt-10 md:mt-10">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
          Welcome to <span className="text-red-600">ShopLite</span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 mb-6 text-justify">
          Discover the best quality products and enjoy an exceptional shopping
          experience with ShopLite. Our mission is to make online shopping easy,
          enjoyable, and accessible to everyone. With a focus on transparency,
          integrity, and innovation, we are dedicated to providing you with the
          best service.
        </p>
        <button className="bg-blue-700 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 transform hover:scale-105">
          Start Shopping
        </button>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        <img
          src={hero}
          alt="ShopLite Shopping"
          className="rounded-lg shadow-xl w-full lg:w-4/5"
        />
      </div>
    </section>
  );
};

export default HeroSection;
