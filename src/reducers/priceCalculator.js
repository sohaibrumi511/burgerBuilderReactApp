import { createSlice } from '@reduxjs/toolkit';

const priceSlice = createSlice({
  name: 'Price Calculator',
  initialState: {
    price: 3,
  },
  reducers: {
    incrementPrice: (state, action) => {
      switch (action.payload) {
        case 'lettuce':
          state.price += 0.5;
          break;
        case 'bacon':
          state.price += 0.7;
          break;
        case 'cheese':
          state.price += 0.4;
          break;
        case 'meat':
          state.price += 1.3;
          break;
        default:
          break;
      }
    },
    decrementPrice: (state, action) => {
      switch (action.payload) {
        case 'lettuce':
          state.price -= 0.5;
          break;
        case 'bacon':
          state.price -= 0.7;
          break;
        case 'cheese':
          state.price -= 0.4;
          break;
        case 'meat':
          state.price -= 1.3;
          break;
        default:
          break;
      }
      if (state.price < 3) state.price = 3;
    },
  },
});

export const { incrementPrice, decrementPrice } = priceSlice.actions;
export default priceSlice.reducer;
