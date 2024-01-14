import React from "react";
import "./UploadPage.scss";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const UploadPage = () => {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("PUBLISH");
  const [formFields, setFormFields] = useState({
    title: "",
    description: "",
  });
  const [formErrors, setFormErrors] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const isTitleValid = () => {
    const isValid = formFields.title.trim() !== "";
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      title: isValid ? "" : "Title is required",
    }));
    return isValid;
  };

  const isDescriptionValid = () => {
    const isValid = formFields.description.trim() !== "";
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      description: isValid ? "" : "Description is required",
    }));
    return isValid;
  };

  const isFormFieldsValid = () => {
    return isTitleValid() && isDescriptionValid();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isFormFieldsValid()) {
      const newVideo = {
        title: formFields.title,
        description: formFields.description,
      };

      await axios.post(process.env.REACT_APP_API_URL + "/videos", newVideo);
      setButtonText("PUBLISHED");

      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  const handleCancel = () => {
    navigate("/");
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
              name="title"
              placeholder="Add a title to your video"
              value={formFields.title}
              onChange={handleChange}
            ></input>
            {formErrors.title && (
              <p className="error-message">{formErrors.title}</p>
            )}
            <label className="upload__container-label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="upload__container-text"
              name="description"
              placeholder="Add a description to your video"
              value={formFields.description}
              onChange={handleChange}
            ></textarea>
            {formErrors.description && (
              <p className="error-message">{formErrors.description}</p>
            )}
          </div>
        </div>

        <div className="upload__button">
          <button className="upload__button-publish"> {buttonText}</button>
          <button
            className="upload__button-cancel"
            type="button"
            onClick={handleCancel}
          >
            CANCEL
          </button>
        </div>
      </form>
    </section>
  );
};

export default UploadPage;
