import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders.jsx";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar flex justify-between px-24 bg-neutral text-neutral-content py-4">
        <div>
          <a className="btn btn-ghost normal-case text-xl text-white">
            Auth-Context
          </a>
        </div>
        <div>
          <Link className="btn btn-ghost normal-case text-white text-xl" to="/">
            Home
          </Link>
          <Link className="btn btn-ghost normal-case text-white text-xl" to="/orders">
             Orders
          </Link>
          <Link
            className="btn btn-ghost normal-case text-white text-xl"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="btn btn-ghost normal-case text-white text-xl"
            to="/register"
          >
            Register
          </Link>
          {user ? (
            <>
              <span>{user.email}</span>
              <button
                onClick={handleLogOut}
                className="btn btn-outline btn-accent ml-2 "
              >
                SignOut
              </button>
            </>
          ) : (
            <Link className="btn btn-ghost normal-case text-white text-xl"  to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
