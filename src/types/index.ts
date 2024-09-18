export interface Character {
  name: string;
  height: string;
  mass: string;
  url: string;
}

export interface RootState {
  characters: {
    characters: Character[];
    loading: boolean;
    error: string | null;
  };
}
