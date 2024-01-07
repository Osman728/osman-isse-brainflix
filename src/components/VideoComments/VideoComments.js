import "./VideoComments.scss";

const VideoComments = ({ video }) => {
  
  return (
    <section className="comment">
      {video.comments.map((comment) => {
      
      const dateFormat = new Date(comment.timestamp);
        const formattedDate = dateFormat.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        });

        return (
          <article key={comment.id} className="comment__section">
            <div className="comment__avatar"></div>
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
    </section>
  );
};

export default VideoComments;
