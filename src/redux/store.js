// ✅ Correct `src/store.js` (or `store.jsx` if you're using .jsx for some reason)
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/CounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});