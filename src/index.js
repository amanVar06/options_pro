import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./app/store";
import { Feedback, HomePage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_CLIENT_ID}>
    <Provider store={store}>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<App />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </Provider>
  </GoogleOAuthProvider>
);
