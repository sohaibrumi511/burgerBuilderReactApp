import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'Ingredient Counter',
  initialState: {
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  reducers: {
    incrementIngredient: (state, action) => {
      switch (action.payload) {
        case 'lettuce':
          state.lettuce += 1;
          break;
        case 'bacon':
          state.bacon += 1;
          break;
        case 'cheese':
          state.cheese += 1;
          break;
        case 'meat':
          state.meat += 1;
          break;
        default:
          break;
      }
    },
    decrementIngredient: (state, action) => {
      switch (action.payload) {
        case 'lettuce':
          state.lettuce -= 1;
          break;
        case 'bacon':
          state.bacon -= 1;
          break;
        case 'cheese':
          state.cheese -= 1;
          break;
        case 'meat':
          state.meat -= 1;
          break;
        default:
          break;
      }
    },
    resetIngredient: (state) => {
      state.lettuce = 0;
      state.bacon = 0;
      state.cheese = 0;
      state.meat = 0;
    },
  },
});

export const { incrementIngredient, decrementIngredient, resetIngredient } =
  counterSlice.actions;
export default counterSlice.reducer;
