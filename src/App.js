import { useState } from "react";
import "./App.scss";
import videoDetails from "./data/video-details.json";
import Header from "./components/Header/Header"
import Video from "./components/Video/Video"

function App() {
const [video, setVideos] = useState(videoDetails);
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  
 
    return (
      <>
        <Header />
        <Video selectedVideo={selectedVideo} />
      </>
    );
  }
  
  export default App;
  