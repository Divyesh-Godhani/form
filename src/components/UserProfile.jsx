import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductPage from "./Productpage";

export default function UserProfile() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/login";
  };

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

  return (
    <div>
      <h1>User Profile</h1>
      <p className="text-green-400">Logged-in User: {loggedInUser.username}</p>

      <button className="py-1 px-2 bg-white" onClick={handleLogout}>
        Logout
      </button>

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
      <div>
        <ProductPage />
      </div>
    </div>
  );
}
