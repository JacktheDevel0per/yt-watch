import "./SearchBarWidget.css";

import { appWindow } from "@tauri-apps/api/window";

import SearchBarWiget from "./SearchBarWidget";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

function SearchBarWidget() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchField = searchParams.has("searchBackup")
    ? searchParams.get("searchBackup")
    : "";

  return (
    <>
      {/* <Search className="h-5 w-5" /> */}
      <div
        className="self-center flex-grow
      border bg-accent text-accent-foreground
      rounded-md
      
      "
      >
        <input
          onChange={(e) => {
            setSearchParams(
              { searchBackup: e.target.value },
              { replace: true }
            );
          }}
          type="text"
          placeholder="Search YouTube"
          defaultValue={searchField}
          className=" 

          dark:text-white
        border-solid
        border-white
        p-3
        border-4
        font-medium
          flex h-10 w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </>
  );
}

export default SearchBarWidget;
