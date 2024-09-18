import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StarWarsList from '../components/StarWarsList';
import { fetchStarWarsCharacters } from '../services/api';
import { Character } from '../types';

const StarWarsPage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStarWarsCharacters()
      .then(data => {
        setCharacters(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch characters');
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link to="/" className="mb-8 text-blue-500 hover:text-blue-600 block">
        &larr; Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">Star Wars Characters</h1>
      <StarWarsList characters={characters} />
    </div>
  );
};

export default StarWarsPage;
