import React from 'react';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

function Auth({ register }) {
  return (
    <>
      <div
        className="w-full flex justify-center items-center flex-col"
        style={{
          backgroundImage: "linear-gradient(to right, #0f2027, #2c7744, #a8e063)",
          height: "100vh",
        }}
      >
        <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">FreshBasket</h1>

        <div className="md:grid grid-cols-3 w-full">
          <div></div>

          <div>
            <form className="bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-xl flex flex-col items-center w-full max-w-md mx-auto border border-white/20">
              <div
                className="mb-5 flex justify-center items-center bg-white rounded-full shadow-md"
                style={{ width: "70px", height: "70px" }}
              >
                <CgProfile style={{ width: "70px", height: "70px", color: "#2c7744" }} />
              </div>

              <h2 className="text-white text-2xl mb-6 font-semibold tracking-wide">
                {register ? 'Register' : 'Login'}
              </h2>

              {register && (
                <div className="w-full mb-4">
                  <label htmlFor="username" className="text-white block mb-2">Username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    className="w-full bg-white/80 text-gray-900 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
              )}

              <div className="w-full mb-4">
                <label htmlFor="email" className="text-white block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/80 text-gray-900 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div className="w-full mb-6">
                <label htmlFor="password" className="text-white block mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full bg-white/80 text-gray-900 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div className="w-full space-y-3 mb-6">
                <button className="w-full bg-gradient-to-r from-green-600 via-teal-500 to-lime-400 p-2 rounded text-white font-bold hover:scale-105 transition-transform duration-200">
                  {register ? 'Register' : 'Login'}
                </button>
              </div>

              {!register && (
                <>
                  <div className="w-full flex justify-center mb-4">
                    <p className="text-white">— or —</p>
                  </div>

                  <button className="w-full bg-white text-gray-800 p-2 rounded hover:bg-gray-200 mb-6 font-semibold">
                    Continue with Google
                  </button>
                </>
              )}

              <div className="text-white text-sm text-center space-y-2">
                {register ? (
                  <p>
                    Already a user?{' '}
                    <Link to="/login" className="text-green-300 underline hover:text-green-500">
                      Login
                    </Link>
                  </p>
                ) : (
                  <p>
                    Don't have an account?{' '}
                    <Link to="/register" className="text-lime-300 underline hover:text-lime-500">
                      Register
                    </Link>
                  </p>
                )}
              </div>
            </form>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default Auth;
