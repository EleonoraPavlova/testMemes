import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { cardsApi } from "@/services/api/cards";
import { createAppAsyncThunk } from "@/services/utils/createAppAsyncThunk";
import { Card } from "@/shared/types";

type CardState = {
  cards: Card[];
  isLoading: boolean;
  error: string | null;
};

const initialState: CardState = {
  cards: [],
  isLoading: false,
  error: null,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },
    updateCard: (state, action: PayloadAction<Card>) => {
      const index = state.cards.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.cards[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCards.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

const getCards = createAppAsyncThunk<Card[], void>(`${cardsSlice.name}/getCards`, async () => {
  const res = await cardsApi.getCards();
  return res.data;
});

export const cardsThunks = { getCards };
export const { setCards, updateCard } = cardsSlice.actions;
export default cardsSlice.reducer;
