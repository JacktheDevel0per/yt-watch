import { Button } from "@/components/ui/button";

import { WrapText } from "lucide-react";

function WindowMoveWidget() {
  return (
    <>
      <Button
        data-tauri-drag-region
        variant="ghost"
        size="icon"
        className="h-10 w-20"
      >
        <span className="sr-only">Move Window</span>
        <WrapText
          data-tauri-drag-region
          className="h-[1.2rem] w-[1.2rem] scale-100 pointer-events-none"
        />
      </Button>
    </>
  );
}

export default WindowMoveWidget;
