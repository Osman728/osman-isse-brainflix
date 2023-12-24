import { useState } from "react";
import "./App.scss";
import videoDetails from "./data/video-details.json";
import Header from "./components/Header/Header"
import Video from "./components/Video/Video"
import VideoDescription from "./components/VideoDescription/VideoDescription"
import VideoForm from "./components/VideoForm/VideoForm";
import VideoComments from "./components/VideoComments/VideoComments";
function App() {
const [video, setVideos] = useState(videoDetails);
const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  
 
    return (
      <>
        <Header />
        <Video selectedVideo={selectedVideo} />
        <VideoDescription selectedVideo={selectedVideo} />
        <VideoForm selectedVideo={selectedVideo} />
        <VideoComments selectedVideo={selectedVideo} />
      </>
    );
  }
  
  export default App;
  