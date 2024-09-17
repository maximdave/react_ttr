import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignupForm from './SignupForm';
import StarWarsCharacters from './StarWarsCharacters';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/starwars" element={<StarWarsCharacters />} />
      </Routes>
    </Router>
  );
}

export default App;
