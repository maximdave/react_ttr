import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">My App</h1>
          <div className="space-x-4">
            <Link
              to="/signup"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Sign Up
            </Link>
            <Link
              to="/starwars"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Star Wars Characters
            </Link>
            <Link
              to="/wenaija"
              className="bg-yellow-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              WeNaija
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Welcome to My App
        </h2>
        <p className="text-xl text-center text-gray-600">
          This is a sample landing page. Click the Sign Up button to get
          started!
        </p>
      </main>
      <footer className="bg-gray-200 py-4">
        <p className="text-center text-gray-600">
          © 2023 My App. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
