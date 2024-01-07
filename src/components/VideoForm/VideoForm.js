import "./VideoForm.scss";

import profilePicture from "../../assets/images/Mohan-muruge.jpg";
const VideoForm = () => {
  return (
    <section className="conversation">
      <h2 className="conversation__title">3 Comments</h2>

      <div className="conversation__container">
        <div className="conversation__profile">
          <img
            src={profilePicture}
            alt="Profile picture"
            className="conversation__profile-image"
          />
        </div>

        <form className="conversation__form">
          <div className="conversation__comment">
            <label className="conversation__comment-label">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="conversation__comment-text"
              name="comment"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <button className="conversation__button">COMMENT</button>
        </form>
      </div>
    </section>
  );
};

export default VideoForm;
