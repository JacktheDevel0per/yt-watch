import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./styles.css";
import "./darkmode.css";

import {
  MemoryRouter,
  NavLink,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import SearchBar from "./components/SearchBar";
import Video from "./components/Video";
import VideoPlayerPage from "./pages/VideoPlayerPage";
import VideoSearchPage from "./pages/VideoSearchPage";
import LandingPage from "./pages/LandingPage";
import { Title } from "@mantine/core";
import TitleBar from "./components/TitleBar";

import "./globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
