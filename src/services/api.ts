import { Character } from '../types';

export const fetchStarWarsCharacters = async (): Promise<Character[]> => {
  const response = await fetch('https://swapi.dev/api/peoples/');
  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }
  const data = await response.json();
  return data.results;
};
