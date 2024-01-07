import "./VideoDescription.scss";
import views from "../../assets/images/views.svg";
import likes from "../../assets/images/likes.svg";

const VideoDescription = ({ video }) => {

  
  const date = video.timestamp;
  const dateFormat = new Date(date);
  const formattedMonth = (dateFormat.getMonth() + 1)
    .toString()
    .padStart(2, "0");
  const formattedDay = dateFormat.getDate().toString().padStart(2, "0");
  const formattedYear = dateFormat.getFullYear();
  const formattedDate = `${formattedMonth}/${formattedDay}/${formattedYear}`;
  return (
    <section className="videoinfo">
      <h1 className="videoinfo__title">{video.title}</h1>
      <div className="videoinfo__details">
        <div className="videoinfo__left-container">
          <p className="videoinfo__author">By {video.channel}</p>
          <p className="videoinfo__date">{formattedDate}</p>
        </div>

        <div className="videoinfo__right-container">
          <div className="videoinfo__view-container">
            <img
              className="videoinfo__view-icon"
              src={views}
              alt="Image views"
            />
            <p className="videoinfo__views">{video.views}</p>
          </div>

          <div className="videoinfo__like-container">
            <img
              className="videoinfo__like-icon"
              src={likes}
              alt="Image likes"
            />
            <p className="videoinfo__likes">{video.likes}</p>
          </div>
        </div>
      </div>
      <p className="videoinfo__description">{video.description}</p>
    </section>
  );
};

export default VideoDescription;
