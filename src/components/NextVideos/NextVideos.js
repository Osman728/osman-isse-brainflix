import "./NextVideos.scss";

const NextVideos = ({ videoSideBar, handleFilmClick }) => {
  return (
    <section className="videolists">
      <h1 className="nextvideo__header">Next Video</h1>
      {videoSideBar.map((video) => (
        <div
          key={video.id}
          className="nextvideo"
          onClick={() => handleFilmClick(video)}
        >
          <img
            className="nextvideo__image"
            src={video.image}
            alt={`${video.title} video thumbnail`}
          />
          <div className="nextvideo__info">
            <p className="nextvideo__info-title">{video.title}</p>
            <p className="nextvideo__info-author">{video.channel}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default NextVideos;
