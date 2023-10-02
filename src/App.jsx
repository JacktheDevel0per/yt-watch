import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

import {
  MemoryRouter,
  NavLink,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import {
  AppShell,
  Text,
  Burger,
  ActionIcon,
  Group,
  AppShellNavbar,
} from "@mantine/core";

import { useMantineTheme } from "@mantine/core";

import { MantineProvider, createTheme } from "@mantine/core";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

import "./App.css";

import SearchBar from "./components/SearchBar";
import Video from "./components/Video";
import VideoPlayerPage from "./pages/VideoPlayerPage";
import VideoSearchPage from "./pages/VideoSearchPage";
import LandingPage from "./pages/LandingPage";
import TitleBar from "./components/title/NewTitleBar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<LandingPage />}></Route>
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
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
