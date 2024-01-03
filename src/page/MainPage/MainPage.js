import { useState } from "react";
import Video from "../../components/Video/Video";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import VideoForm from "../../components/VideoForm/VideoForm";
import VideoComments from "../../components/VideoComments/VideoComments";
import videoSideBar from "../../data/videos.json";
import NextVideos from "../../components/NextVideos/NextVideos";
import videoDetails from "../../data/video-details.json";
import "./MainPage.scss";

function MainPage() {
  const [video, setVideo] = useState(videoDetails);
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  const [videoList, setVideoList] = useState(videoSideBar);

  const handleFilmClick = (clickedVideo) => {
    const videoMatch = video.find(
      (videoMatch) => videoMatch.id === clickedVideo.id
    );
    if (videoMatch) {
      setSelectedVideo(videoMatch);
    }
  };

  const filteredVideoList = videoList.filter(
    (video) => video.id !== selectedVideo.id
  );
  return (
    <>
      <Video selectedVideo={selectedVideo} />
      <main className="column__container">
        <div className="column__content">
          <VideoDescription selectedVideo={selectedVideo} />
          <VideoForm selectedVideo={selectedVideo} />
          <VideoComments selectedVideo={selectedVideo} />
        </div>
        <aside className="related__videos">
          <NextVideos
            videoSideBar={filteredVideoList}
            handleFilmClick={handleFilmClick}
          />
        </aside>
      </main>
    </>
  );
}

export default MainPage;
