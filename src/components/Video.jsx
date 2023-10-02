// import Iframe from "react-iframe";

import { useSearchParams, useNavigate } from "react-router-dom";

function Video(props) {
  let video_src =
    "https://www.youtube.com/embed/" + props.vid + "?rel=0&autoplay=1";

  return (
    <>
      <div className="yt-player-div">
        <iframe
          className="yt-player-iframe"
          width="100%"
          height="100%"
          src={video_src}
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          // allowfullscreen="allowfullscreen"
          allowFullScreen="allowfullscreen"
        ></iframe>
      </div>
    </>
  );
}

export default Video;
