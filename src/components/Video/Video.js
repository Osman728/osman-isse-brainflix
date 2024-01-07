import "./Video.scss";

const Video = ({ video }) => {
  return (
    <section className="video">
      <video
        className="video__player"
        poster={video.image}
        controls
      ></video>
    </section>
  );
};

export default Video;
