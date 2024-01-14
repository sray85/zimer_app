import { configureStore } from "@reduxjs/toolkit";
import allReducers from "../index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage

const persistConfig = {
  key: "root",
  storage,
};

const AllReducers = persistReducer(persistConfig, allReducers);

const store = configureStore({
  reducer: {
    AllReducers,
  },
});

store.subscribe(() => {
  var data = store.getState();
  console.log(data);
});

export const persistor = persistStore(store);
export default store;
