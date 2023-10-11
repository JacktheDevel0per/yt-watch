import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { ThemeProvider } from "@/components/theme-provider";

import {
  MemoryRouter,
  NavLink,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

import "./App.css";

import "./globals.css";

import SearchBar from "./components/SearchBar";
import Video from "./components/Video";
import VideoPlayerPage from "./pages/VideoPlayerPage";
import VideoSearchPage from "./pages/VideoSearchPage";

import TitleBar from "./components/title/NewTitleBar";
import WrapperPage from "./pages/WrapperPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<WrapperPage />}></Route>
      <Route path="watch" element={<VideoPlayerPage />} />
      <Route path="search" element={<VideoSearchPage />} />
    </>
  )
);

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <>
      {/* This TitleBar will be removed and replaced with a new one that is inside the router, and includes the search as one of its groups,
    
    Unlike the search bar, the title bar is basically no strings attached. It can be in any scope and anywhere.
    
    */}
      {/* <TitleBar /> */}
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
