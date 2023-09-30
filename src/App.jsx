import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

import SearchBar from "./components/SearchBar";
import Video from "./components/Video";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <SearchBar></SearchBar>
      <Video video_id="z86ToVPx42Y"></Video>
    </div>
  );
}

export default App;
