import "./UploadPage.scss";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const UploadPage = () => {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("PUBLISH");

  const handleSubmit = (event) => {
    event.preventDefault();

    setButtonText("PUBLISHED");

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <form className="upload__form" onSubmit={handleSubmit}>
        <div className="upload__content">
          <div className="upload__form-thumbnail-container">
            <label className="upload__form-label">VIDEO THUMBNAIL</label>
            <video
              className="upload__form-thumbnail"
              poster={Thumbnail}
            ></video>
          </div>
          <div className="upload__container">
            <label className="upload__container-label">TITLE YOUR VIDEO</label>
            <input
              className="upload__container-title"
              name="Title"
              placeholder="Add a title to your video"
            ></input>
            <label className="upload__container-label">TITLE YOUR VIDEO</label>
            <textarea
              className="upload__container-text"
              name="description"
              placeholder="Add a description to your video"
            ></textarea>
          </div>
        </div>

        <div className="upload__button">
          <button className="upload__button-publish"> {buttonText}</button>
          <button className="upload__button-cancel">CANCEL</button>
        </div>
      </form>
    </section>
  );
};

export default UploadPage;
