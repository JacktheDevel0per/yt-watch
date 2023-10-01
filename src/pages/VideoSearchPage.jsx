import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function VideoSearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const navagate = useNavigate();

  const searchField = searchParams.has("search")
    ? searchParams.get("search")
    : "";

  // if (!searchParams.has("search") || searchParams.get("search") === "") {
  //   navagate("/");
  // }

  useEffect(() => {
    if (!searchParams.has("search") || searchParams.get("search") === "") {
      navagate("/");
    }
  });

  return (
    <>
      <div>
        <h1>Video Search Page </h1>
        {searchField}
      </div>
    </>
  );
}

export default VideoSearchPage;
