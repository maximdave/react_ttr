export interface Character {
  name: string;
  height: string;
  mass: string;
  url: string; // Keep this if it's used for fetched characters
  image?: string; // Add this line
}

export interface RootState {
  characters: {
    characters: Character[];
    loading: boolean;
    error: string | null;
  };
}
