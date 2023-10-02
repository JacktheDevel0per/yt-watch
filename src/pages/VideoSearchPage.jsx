import { useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";

function VideoSearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const navagate = useNavigate();

  const GetThumbnail = (videoId) => {
    return "https://i.ytimg.com/vi_webp/" + video_id + "/maxresdefault.webp";
  };

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
      <Link to="/watch?v=QI22Dry_QDk"> VIDEO TEST</Link>
      <Link to="/watch?v=wYdnJPYFTIE"> VIDEO TEST 2</Link>
    </>
  );
}

export default VideoSearchPage;
