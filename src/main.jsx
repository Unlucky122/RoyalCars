import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cars from "./components/Cars.jsx";
import CarCard from "./components/CarCard.jsx";

// const routes = createBrowserRouter(prop);
// createRoutesFromElements(
//   <Route path="/" element={<Home cars={prop.cars} />}>
//     <Route index element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/contact" element={<Contact />} />
//     <Route path="*" element={<p>You shall not pass</p>} />
//   </Route>
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
