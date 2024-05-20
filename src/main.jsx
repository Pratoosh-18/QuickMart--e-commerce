import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProductContextProvider from "./context/ProductContext.jsx";
import { BrowserRouter} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import { Auth0Provider } from '@auth0/auth0-react';
  

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-6mmhgbzp21t030bz.us.auth0.com"
    clientId="QeannnsMj1xuf2tbYZ2xUZEeDcgGiggm"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <ProductContextProvider>
        <App />
        <ToastContainer/>
      </ProductContextProvider>
    </BrowserRouter>
    </Auth0Provider>
);
