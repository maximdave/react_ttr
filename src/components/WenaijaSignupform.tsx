import React from "react";

const WenaijaSignupform: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Side Image */}
      <div className="hidden md:flex md:w-1/2 bg-green-100 justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Let’s build a healthy community together
          </h1>
          <img src="path_to_your_image" alt="Community" className="mt-4" />
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-white">
        <form className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Create an account
          </h2>
          <p className="text-center mb-6">
            Kindly fill in your details to sign up
          </p>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign up
          </button>

          <p className="mt-4 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-green-500">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default WenaijaSignupform;
