import { useState } from "react";
import "./App.scss";
import videoDetails from "./data/video-details.json";
import Header from "./components/Header/Header"
import Video from "./components/Video/Video"
import VideoDescription from "./components/VideoDescription/VideoDescription"

function App() {
const [video, setVideos] = useState(videoDetails);
const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  
 
    return (
      <>
        <Header />
        <Video selectedVideo={selectedVideo} />
        <VideoDescription selectedVideo={selectedVideo} />
      </>
    );
  }
  
  export default App;
  