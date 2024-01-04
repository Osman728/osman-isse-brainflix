import "./UploadPage.scss";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";

const UploadPage = () => {
  return (
    <section className="upload">
      <h1 className="upload__title">UploadVideo</h1>
      <form className="upload__form">
        <label className="upload__form--label">VIDEO THUMBNAIL</label>
        <video
          className="upload__form--thumbnail"
          poster={Thumbnail}
          controls
        ></video>
        <div className="upload__container">
          <label className="upload__container--label">TITLE YOUR VIDEO</label>
          <input
            className="upload__container--title"
            name="Title"
            placeholder="Add a title to your video"
          ></input>
          <label  className="upload__container--label">TITLE YOUR VIDEO</label>
          <textarea
             className="upload__container--text"
            name="description"
            placeholder="Add a description to your video"
          ></textarea>
        </div>

        <div className="upload__button">
        
         <button  className="upload__button--publish">PUBLISH</button>
         <button className="upload__button--cancel">CANCEL</button>
        </div>

      </form>
    </section>
  );
};

export default UploadPage;
