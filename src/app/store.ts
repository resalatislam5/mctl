import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import themeReducer from './features//themeSlice';
import modalReducer from './features/modalSlice';
import authSlice from './features/authSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  theme: themeReducer,
  modal: modalReducer,
  auth: authSlice,
  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: 'root', // key in localStorage
  storage, // storage method
  whitelist: ['auth', 'theme'], // reducers to persist (optional)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignore these redux-persist actions
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(api.middleware),
});

// 5️⃣ Persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
