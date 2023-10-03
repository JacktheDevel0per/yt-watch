import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Moon, Sun } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import { useTheme } from "@/components/theme-provider";

function ThemeSelectorWidget() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div
        onContextMenu={(e) => {
          setTheme("system");
          e.prev;
          e.preventDefault();
        }}
        onClick={(e) => {
          setTheme(theme === "dark" ? "light" : "dark");
          e.preventDefault();
        }}
      >
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </>
  );
}

export default ThemeSelectorWidget;
