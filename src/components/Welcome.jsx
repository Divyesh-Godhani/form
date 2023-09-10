import React from "react";
import { Link } from "react-router-dom";
import product from "../data/product";

const Welcome = () => {
  console.log(product);

  const handleaddtocart = (item) => {
    console.log(item);
  };
  return (
    <div>
      <h1>Welcome to My App</h1>

      <div className="py-2">
        <button
          type="button"
          className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <Link to="/login" className="text-white">
            Login
          </Link>
        </button>
        <button
          type="button"
          className=" bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          <Link to="/register" className="text-white">
            Register
          </Link>
        </button>
      </div>
      <ul>
        {product.map((item, i) => {
          return (
            <li key={i}>
              <div className="product">
                <div>
                  <span>{item.id}</span>
                </div>
                <div>
                  <span>{item.name}</span>
                </div>
                <div>
                  <span>{item.price}</span>
                </div>
                <button onClick={() => handleaddtocart(item.id)}>
                  add to cart
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Welcome;
