import { getAuth } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.config.js";
import { AuthContext } from "./../../providers/AuthProviders";

const auth = getAuth(app);

const Register = () => {
  const {createUser} = useContext(AuthContext);
  // console.log(createUser);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="bg-gray-200 text-center text-3xl font-serif font-bold pt-10">
        Please Register!!
      </h1>
      <div class="bg-gray-200 flex justify-center items-center py-16">
        <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 class="text-3xl font-bold text-center mb-4">Register</h2>
          <form onSubmit={handleRegister}>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="name"
              >
                Name
              </label>
              <input
                class="w-full p-2 border rounded-md"
                type="text"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="w-full p-2 border rounded-md"
                type="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="w-full p-2 border rounded-md"
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <button
              class="btn btn-outline btn-secondary w-full mt-6"
              type="submit"
            >
              Register
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
