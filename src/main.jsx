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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SearchBar />}>
        <Route path="watch" element={<VideoPlayerPage />} />
        <Route path="search" element={<VideoSearchPage />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router}>
      <SearchBar />
    </RouterProvider>
  </>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
