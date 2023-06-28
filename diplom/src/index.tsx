import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom"
import router from "./router"
import '../src/styles/index.scss'
import '../src/styles/variables.scss'
import { store } from "../src/store/store"
import { Provider } from 'react-redux'





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
