import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Auth({ register }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (role === 'admin' && register) {
      Swal.fire({
        icon: 'info',
        title: 'Admin Registration Disabled',
        text: 'Only login is allowed for admins.',
      });
      return;
    }

    const endpoint = register ? 'register' : 'login';

    // ✅ Add orders: [] only if registering as a user
    const payload = register
      ? {
          email,
          password,
          username,
          role,
          ...(role === "user" && { orders: [] }) // 👈 here
        }
      : { email, password }; // no role/orders on login

    console.log('Payload:', payload);

    try {
      const res = await fetch(`http://localhost:4000/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('user', JSON.stringify(data.user));

        Swal.fire({
          icon: 'success',
          title: register ? 'Registered Successfully!' : 'Welcome Back!',
          text: `Logged in as ${data.user?.role || 'user'} 🚀`,
          timer: 2000,
          showConfirmButton: false,
        });

        navigate(data.user?.role === 'admin' ? '/admin/dashboard' : '/');
      } else {
        throw new Error(data);
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Please check your credentials and try again.',
      });
    }
  };

  return (
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
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-xl flex flex-col items-center w-full max-w-md mx-auto border border-white/20"
          >
            <div
              className="mb-5 flex justify-center items-center bg-white rounded-full shadow-md"
              style={{ width: "70px", height: "70px" }}
            >
              <CgProfile style={{ width: "70px", height: "70px", color: "#2c7744" }} />
            </div>

            <h2 className="text-white text-2xl mb-6 font-semibold tracking-wide">
              {register ? 'Register' : 'Login'}
            </h2>

            <div className="w-full mb-4">
              <label className="text-white block mb-2">Login as:</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-white/80 text-gray-900 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {register && role === 'user' && (
              <div className="w-full mb-4">
                <label htmlFor="username" className="text-white block mb-2">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white/80 text-gray-900 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="w-full mb-6">
              <label htmlFor="password" className="text-white block mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-white/80 text-gray-900 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 via-teal-500 to-lime-400 p-2 rounded text-white font-bold hover:scale-105 transition-transform duration-200"
            >
              {register ? 'Register' : 'Login'}
            </button>

            <div className="text-white text-sm text-center mt-6">
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
  );
}

export default Auth;
