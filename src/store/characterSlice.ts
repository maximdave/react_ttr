import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../types";

interface CharacterState {
  characters: Character[];
  loading: boolean;
  error: string | null;
}

const initialState: CharacterState = {
  characters: [],
  loading: false,
  error: null,
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    fetchCharactersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCharactersSuccess(state, action: PayloadAction<Character[]>) {
      state.loading = false;
      state.characters = action.payload;
    },
    fetchCharactersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addCharacter(state, action: PayloadAction<Character>) {
      state.characters.push(action.payload);
    },
  },
});

export const {
  fetchCharactersStart,
  fetchCharactersSuccess,
  fetchCharactersFailure,
  addCharacter,
} = characterSlice.actions;

export default characterSlice.reducer;
