import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StarWarsList from "../components/StarWarsList";
import AddCharacterForm from "../components/AddCharacterForm";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharactersStart,
  fetchCharactersSuccess,
  fetchCharactersFailure,
} from "../store/characterSlice";
import { fetchStarWarsCharacters } from "../services/api";
import { RootState } from "../types"; // Ensure you have a RootState type defined

const StarWarsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { characters, loading, error } = useSelector(
    (state: RootState) => state.characters
  );

  useEffect(() => {
    const fetchCharacters = async () => {
      dispatch(fetchCharactersStart());
      try {
        const data = await fetchStarWarsCharacters();
        dispatch(fetchCharactersSuccess(data));
      } catch (err) {
        dispatch(fetchCharactersFailure("Failed to fetch characters"));
      }
    };

    fetchCharacters();
  }, [dispatch]);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link to="/" className="mb-8 text-blue-500 hover:text-blue-600 block">
        &larr; Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">Star Wars Characters</h1>
      <AddCharacterForm />
      <StarWarsList characters={characters} />
    </div>
  );
};

export default StarWarsPage;
