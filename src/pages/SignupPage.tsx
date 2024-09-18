import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../components/SignupForm';

const SignupPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Link to="/" className="mb-8 text-blue-500 hover:text-blue-600">
        &larr; Back to Home
      </Link>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
