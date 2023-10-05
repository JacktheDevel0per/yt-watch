import { appWindow } from "@tauri-apps/api/window";

import SearchBarWiget from "./SearchBarWidget";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Minus, Plus, Square, X } from "lucide-react";

import ThemeSelectorWidget from "./ThemeSelectorWidget";
import WindowMoveWidget from "./WindowMoveWidget";
import SearchBarWidget from "./SearchBarWidget";

function TitleBar() {
  return (
    <>
      <div className="flex text-align-center justify-end">
        <SearchBarWidget />

        <WindowMoveWidget />

        <ThemeSelectorWidget />

        <Button
          variant="outline"
          size="icon"
          onClick={() => appWindow.minimize()}
        >
          <Minus className="h-[1.2rem] w-[1.2rem]" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() => appWindow.toggleMaximize()}
        >
          <Square className="h-[1.2rem] w-[1rem]" />
        </Button>

        <Button variant="outline" size="icon" onClick={() => appWindow.close()}>
          <X className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </div>
    </>
  );
}

export default TitleBar;
