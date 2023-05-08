import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { lenguajeReducer } from '../features';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['lenguajeState'],
};

const rootReducers = combineReducers({
    lenguajeState: lenguajeReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };
