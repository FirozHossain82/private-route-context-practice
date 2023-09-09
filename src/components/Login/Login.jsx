import React, { useContext } from "react";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.config.js";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../../providers/AuthProviders.jsx";

const auth = getAuth(app);

const Login = () => {
    const {signIn, googleSignIn} = useContext(AuthContext);


const handleLogin = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    signIn(email, password)
    .then((result) =>{
      const loggedIn = result.user;
      console.log(loggedIn);
      form.reset();
    })
    .catch((error) =>{
      console.log(error.message)
    })
}

const handleGoogleSignIn =() =>{
  googleSignIn()
  .then((result) =>{
    const loggedUser = result.user;
    console.log(loggedUser);
  })
  .catch((error) =>{
    console.log(error)
  })
}


  return (
    <div>
        <h1 className="text-center text-4xl font-serif font-bold py-8">Please Login!!</h1>
      <div className=" flex justify-center items-center py-14">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-orange-400 pt-0">
                Forget Password? Please
                <button className="btn btn-link">Reset password</button>
              </p>
            </div>
            <button
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700 hover:bg-blue-600"
              type="submit"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-4">
            New Account Please?{" "}
            <Link
              className="text-orange-600 font-bold font-serif"
              to="/register"
            >
              Sign Up
            </Link>
          </p>
          <button onClick={handleGoogleSignIn} className="btn btn-primary w-full">Google SignIn</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
