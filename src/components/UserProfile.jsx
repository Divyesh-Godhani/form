import React, { useState } from "react";
import { Link } from "react-router-dom";
import product from "../data/product";

export default function UserProfile() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    return (
      <div>
        Please log in to access this page.
        <Link to="/login" className="py-1 px-2 bg-white">
          Login
        </Link>
      </div>
    );
  }

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const handleaddtocart = (item) => {
    console.log(item);
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p className="text-green-400">Logged-in User: {loggedInUser.username}</p>

      <h2 className="py-3 text-2xl font-bold">All Users Data</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <div>
              Username: {user.username}
              {loggedInUser.username === user.username && <span> (You)</span>}
            </div>
            <div>First Name: {user.firstName}</div>
            <div>Last Name: {user.lastName}</div>
            <div>
              <h1>Product</h1>
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
            <div className="py-2">
              {loggedInUser.username !== user.username && (
                <button
                  className="py-2 my-2"
                  onClick={() => handleDeleteUser(index)}
                >
                  Delete
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
