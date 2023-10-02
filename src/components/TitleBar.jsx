import { appWindow } from "@tauri-apps/api/window";

import { useEffect } from "react";

function TitleBar() {
  const minimize = () => {
    appWindow.minimize();
  };
  const maximize = () => {
    appWindow.toggleMaximize();
  };
  const close = () => {
    appWindow.close();
  };

  return (
    <>
      <div data-tauri-drag-region className="titlebar">
        <div
          className="titlebar-button"
          id="titlebar-minimize"
          onClick={minimize}
        >
          <img
            src="https://api.iconify.design/mdi:window-minimize.svg"
            alt="minimize"
          />
        </div>

        <div
          className="titlebar-button"
          id="titlebar-maximize"
          onClick={maximize}
        >
          <img
            src="https://api.iconify.design/mdi:window-maximize.svg"
            alt="maximize"
          />
        </div>

        <div
          className="titlebar-button exit-red"
          id="titlebar-close"
          onClick={close}
        >
          <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
        </div>
      </div>
    </>
  );
}

export default TitleBar;
