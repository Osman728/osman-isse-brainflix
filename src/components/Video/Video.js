import "./Video.scss";

const Video = ({ selectedVideo }) => {
  return (
    <section className="video">
      <video
        className="video__player"
        poster={selectedVideo.image}
        controls
      ></video>
    </section>
  );
};

export default Video;
