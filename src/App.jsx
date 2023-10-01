import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

import {
  MemoryRouter,
  NavLink,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
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

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <MantineProvider>
        <MemoryRouter>
          <SearchBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="watch" element={<VideoPlayerPage />} />
            <Route path="search" element={<VideoSearchPage />} />
          </Routes>
        </MemoryRouter>
      </MantineProvider>
    </div>
  );
}

export default App;
