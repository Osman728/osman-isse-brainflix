import "./VideoDescription.scss";
import views from '../../assets/images/views.svg';
import likes from '../../assets/images/likes.svg';

const VideoDescription = ({ selectedVideo }) => {
  const date = selectedVideo.timestamp;
  const dateFormat = new Date(date);
  const formattedMonth = (dateFormat.getMonth() + 1).toString().padStart(2, "0");
  const formattedDay = dateFormat.getDate().toString().padStart(2, "0");
  const formattedYear = dateFormat.getFullYear();
  const formattedDate = `${formattedMonth}/${formattedDay}/${formattedYear}`;
  return (
    <div className="videoInfo">
      <h1 className="videoInfo__title">{selectedVideo.title}</h1>
      <div className="videoInfo__details">
        <div className="videoInfo__left-container">
          <p className="videoInfo__author">By {selectedVideo.channel}</p>
          <p className="videoInfo__date">{formattedDate}</p>
        </div>

        <div className="videoInfo__right-container">
          <div className="videoInfo__view-container">
            <img className="videoInfo__view-icon" src={views} alt="Image views" />
            <p className="videoInfo__views">{selectedVideo.views}</p>
          </div>

          <div className="videoInfo__like-container">
            <img className="videoInfo__like-icon" src={likes} alt="Image likes" />
            <p className="videoInfo__likes">{selectedVideo.likes}</p>
          </div>
        </div>
      </div>
      <p className="videoInfo__description">{selectedVideo.description}</p>
    </div>
  );
};

export default VideoDescription;
