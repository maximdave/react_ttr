import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import StarWarsPage from './pages/StarWarsPage';
import WenaijaSignupform from './components/WenaijaSignupform';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/starwars" element={<StarWarsPage />} />
        <Route path="/wenaija" element={<WenaijaSignupform />} />
      </Routes>
    </Router>
  );
}

export default App;
