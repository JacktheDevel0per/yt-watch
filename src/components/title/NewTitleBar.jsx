import { appWindow } from "@tauri-apps/api/window";

import SearchBarWiget from "./SearchBarWidget";
import TitleButton from "./TitleButtonWidget";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Minus, Plus, Square, X } from "lucide-react";

import TitleButtonWidget from "./TitleButtonWidget";
import ThemeSelectorWidget from "./ThemeSelectorWidget";

function TitleBar() {
  return (
    <>
      <div className="titlebar">
        <div className="data-tauri-drag-region">
          <div>
            <div></div>
          </div>
        </div>

        <ThemeSelectorWidget />

        <TitleButtonWidget
          image="https://api.iconify.design/mdi:window-minimize.svg"
          action={() => appWindow.minimize()}
        >
          <Minus className="h-[1.2rem] w-[1.2rem]" />
        </TitleButtonWidget>

        <TitleButtonWidget
          image="https://api.iconify.design/mdi:window-maximize.svg"
          action={() => appWindow.toggleMaximize()}
        >
          <Square className="h-[1rem] w-[1rem]" />
        </TitleButtonWidget>

        <TitleButtonWidget
          className="titlebar-button exit-red"
          image="https://api.iconify.design/mdi:close.svg"
          id="titlebar-close"
          action={() => appWindow.close()}
        >
          <X className="h-[1.2rem] w-[1.2rem]" />
        </TitleButtonWidget>
      </div>
    </>
  );
}

export default TitleBar;
