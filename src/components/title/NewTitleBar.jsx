import { appWindow } from "@tauri-apps/api/window";

import SearchBarWiget from "./SearchBarWidget";
import TitleButton from "./TitleButtonWidget";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TitleButtonWidget from "./TitleButtonWidget";

function TitleBar() {
  return (
    <>
      <div className="titlebar">
        <div className="data-tauri-drag-region">
          <div>
            <div></div>
          </div>
        </div>
        <TitleButtonWidget
          image="https://api.iconify.design/mdi:window-minimize.svg"
          action={() => appWindow.minimize()}
        />

        <TitleButtonWidget
          image="https://api.iconify.design/mdi:window-maximize.svg"
          action={() => appWindow.maximize()}
        />

        <TitleButtonWidget
          className="titlebar-button exit-red"
          image="https://api.iconify.design/mdi:close.svg"
          id="titlebar-close"
          action={() => appWindow.close()}
        />
      </div>
    </>
  );
}

export default TitleBar;
