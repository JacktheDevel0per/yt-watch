import Video from "../components/Video";

import { useSearchParams, useNavigate } from "react-router-dom";

function VideoPlayerPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const navagate = useNavigate();

  const vid = searchParams.has("v") ? searchParams.get("v") : navagate("/");

  if (!vid) {
    console.log("Search Param not found, showing error page");
    navagate("/");
  }

  return (
    <>
      {/* Currently it does not really need more than this, but I still put it in the page... */}
      <Video vid={vid}></Video>
    </>
  );
}

export default VideoPlayerPage;
