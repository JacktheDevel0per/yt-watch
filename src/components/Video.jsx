// import Iframe from "react-iframe";

import { useSearchParams, redirect } from "react-router-dom";

function Video() {
  //We don't actually set it here, user should not be able to either, but it should work if they do.
  const [searchParams, setSearchParams] = useSearchParams();

  if (!searchParams.has("v")) {
    console.log("Search Param not found, showing error page");
    return redirect("/");
  }

  const video_src =
    "https://www.youtube.com/embed/" + searchParams.has("v")
      ? searchParams.get("v")
      : "z86ToVPx42Y" + "?rel=0&autoplay=1"; //Default To Primagen video for now, this will be changed later hopefully.
  return (
    <>
      <div className="yt-player-div">
        <iframe
          className="yt-player-iframe"
          width="100%"
          height="100%"
          src={video_src}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          // allowfullscreen="allowfullscreen"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </div>
    </>
  );
}

export default Video;
