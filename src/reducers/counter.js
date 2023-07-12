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
  },
});

export const { incrementIngredient, decrementIngredient } =
  counterSlice.actions;
export default counterSlice.reducer;
