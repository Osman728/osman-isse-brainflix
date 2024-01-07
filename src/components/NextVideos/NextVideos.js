import { Link } from "react-router-dom";
import "./NextVideos.scss";

const NextVideos = ({ videos }) => {
  return (
    <section className="video-lists">
      <h1 className="next-video__header">Next Video</h1>
      {videos.map((video) => (
        <Link
          key={video.id}
          to={`/video/${video.id}`}
          className="next-video__link"
        >
          <div className="next-video">
            <img
              className="next-video__image"
              src={video.image}
              alt="video thumbnail"
            />
            <div className="next-video__info">
              <p className="next-video__info-title">{video.title}</p>
              <p className="next-video__info-author">{video.channel}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default NextVideos;
