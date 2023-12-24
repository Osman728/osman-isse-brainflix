import "./VideoComments.scss";
const VideoComments = ({ selectedVideo }) => {
  return (
    <div className="comment">
      {selectedVideo.comments.map((comment) => {
        const dateFormat = new Date(comment.timestamp);
        const formattedMonth = (dateFormat.getMonth() + 1).toString().padStart(2, "0");
        const formattedDay = dateFormat.getDate().toString().padStart(2, "0");
        const formattedYear = dateFormat.getFullYear();
        const formattedDate = `${formattedMonth}/${formattedDay}/${formattedYear}`;

        return (
          <article key={comment.id} className="comment__section">
            <div className="comment__avartar"></div>
            <div className="comment__container">
              <div className="comment__info">
                <p className="comment__info-name">{comment.name}</p>
                <span className="comment__info-date">{formattedDate}</span>
              </div>
              <div className="comment__usertext">
                <p className="comment__usertext-post">{comment.comment}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default VideoComments;
