// import { legacy_createStore as createStore } from "redux";
// import { productApi } from "./apiSlice";

// const store = createStore(
//     reducer : {[productApi.reducerPath]} = productApi.reducer, 
//     {} , 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );

// export default store

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productApi } from './apiSlice'

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

setupListeners(store.dispatch)