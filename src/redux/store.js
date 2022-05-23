import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import rootReducer from './reducer/reducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
  })
  