import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./app.jsx";
import Login from "./components/Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/web_app">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/account" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
