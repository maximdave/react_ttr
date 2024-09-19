import React from "react";
import { Character } from "../types";

interface StarWarsListProps {
  characters: Character[];
}

const StarWarsList: React.FC<StarWarsListProps> = ({ characters }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {characters.map((character, index) => (
        <li
          key={index}
          className="bg-white p-4 rounded shadow flex items-center"
        >
          <img
            src={
              character.image ||
              `https://starwars-visualguide.com/assets/img/characters/${
                character.url
                  ? character.url.split("/").filter(Boolean).pop()
                  : index + 1
              }.jpg`
            }
            alt={character.name}
            className="w-24 h-24 rounded-full mr-4 object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
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
  );
};

export default StarWarsList;

// import React from 'react';
// import { Character } from '../types';
// import { getCharacterId } from '../utils/helpers';

// interface StarWarsListProps {
//   characters: Character[];
// }

// const StarWarsList: React.FC<StarWarsListProps> = ({ characters }) => {
//   return (
//     <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {characters.map((character, index) => (
//         <li key={index} className="bg-white p-4 rounded shadow flex items-center">
//           <img
//             src={`https://starwars-visualguide.com/assets/img/characters/${getCharacterId(character.url)}.jpg`}
//             alt={character.name}
//             className="w-24 h-24 rounded-full mr-4 object-cover"
//             onError={(e) => {
//               (e.target as HTMLImageElement).src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
//             }}
//           />
//           <div>
//             <h2 className="text-xl font-semibold">{character.name}</h2>
//             <p>Height: {character.height} cm</p>
//             <p>Mass: {character.mass} kg</p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default StarWarsList;
