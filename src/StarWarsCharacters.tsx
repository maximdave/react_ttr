import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Character {
  name: string;
  height: string;
  mass: string;
  url: string;
}

const StarWarsCharacters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch characters");
        setIsLoading(false);
      });
  }, []);

  const getCharacterId = (url: string) => {
    const matches = url.match(/\/(\d+)\/$/);
    return matches ? matches[1] : '1';
  };

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link to="/" className="mb-8 text-blue-500 hover:text-blue-600 block">
        &larr; Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">Star Wars Characters</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character, index) => (
          <li key={index} className="bg-white p-4 rounded shadow flex items-center">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${getCharacterId(character.url)}.jpg`}
              alt={character.name}
              className="w-24 h-24 rounded-full mr-4 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
              }}
            />
            <div>
              <h2 className="text-xl font-semibold">{character.name}</h2>
              <p>Height: {character.height} cm</p>
              <p>Mass: {character.mass} kg</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StarWarsCharacters;
