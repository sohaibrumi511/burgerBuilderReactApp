import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import counterReducer from './reducers/counter';
import priceReducer from './reducers/priceCalculator';

const rootReducer = combineReducers({
  counter: counterReducer,
  priceCalculator: priceReducer,
});

const store = configureStore({
  reducer: {
    rootReducer: rootReducer,
  },
});

export default store;
