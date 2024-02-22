
import { configureStore } from '@reduxjs/toolkit';
import spaceshipsReducer from '../features/spaceships/spaceshipsSlice';

export const store = configureStore({
  reducer: {
    spaceships: spaceshipsReducer,
  },
});

