import { createSlice } from '@reduxjs/toolkit';

const priceSlice = createSlice({
  name: 'Price Calculator',
  initialState: 3,
  reducers: {
    incrementPrice: (state, action) => {
      switch (action.payload) {
        case 'lettuce':
          state += 0.5;
          break;
        case 'bacon':
          state += 0.7;
          break;
        case 'cheese':
          state += 0.4;
          break;
        case 'meat':
          state += 1.3;
          break;
        default:
          break;
      }
    },
    decrementPrice: (state, action) => {
      switch (action.payload) {
        case 'lettuce':
          state -= 0.5;
          break;
        case 'bacon':
          state -= 0.7;
          break;
        case 'cheese':
          state -= 0.4;
          break;
        case 'meat':
          state -= 1.3;
          break;
        default:
          break;
      }
      if (state < 3) state = 3;
    },
  },
});

export const { incrementPrice, decrementPrice } = priceSlice.actions;
export default priceSlice.reducer;
