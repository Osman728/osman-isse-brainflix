import { Link } from "react-router-dom";
import "./NextVideos.scss";

const NextVideos = ({ videos }) => {
  return (
    <section className="videolists">
      <h1 className="nextvideo__header">Next Video</h1>
      {videos.map((video) => (
        <Link key={video.id} to={`/video/${video.id}`}>
          <div className="nextvideo">
            <img
              className="nextvideo__image"
              src={video.image}
              alt="video thumbnail"
            />
            <div className="nextvideo__info">
              <p className="nextvideo__info-title">{video.title}</p>
              <p className="nextvideo__info-author">{video.channel}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default NextVideos;
