// LoginPage.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., using Firebase, Auth0, or custom backend)
    try {
      // Example: Firebase authentication
      // await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("Logged in successfully!");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div className="w-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Left side (image) */}
          <div className="md:w-1/2">
            <img
              src={loginImage}
              alt="Login"
              className="h-full w-full object-cover md:block hidden"
            />
          </div>
          {/* Right side (form) */}
          <div className="p-8 md:w-1/2">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Log in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm flex flex-col gap-5 ">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to="/forgotpassword"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <Link
                 to="/admin"
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log in
                </Link>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Create account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
