import Iframe from "react-iframe";

function Video(props) {
  const video_src =
    "https://www.youtube.com/embed/" + props.video_id + "?rel=0&autoplay=1";
  return (
    <>
      <h1>{props.video_id}</h1>

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
