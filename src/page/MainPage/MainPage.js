import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Video from "../../components/Video/Video";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import VideoForm from "../../components/VideoForm/VideoForm";
import VideoComments from "../../components/VideoComments/VideoComments";
import NextVideos from "../../components/NextVideos/NextVideos";
import "./MainPage.scss";


const apiVideos = "/videos/";



const MainPage = () => {
  const {videoId } = useParams();
  const [videos, setVideos] = useState(null);
  const [video, setVideo] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const url = process.env.REACT_APP_API_URL;
        const response = await axios.get(url + "/videos");
        console.log(response);
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setIsError(true);
      }
    };

    fetchVideos();
  }, []);
  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const url = process.env.REACT_APP_API_URL;
        const response = await axios.get(url + apiVideos + (videoId || videos[0].id));
        setVideo(response.data);
      } catch (error) {
        console.log("Error fetching video details:", error);
      }
    };
  
    fetchVideoDetails();
  }, [videoId, videos]);
  
  if (!video) {
    return <main>Loading Selected Video...</main>;
  }

  if (isError) {
    return <p>There's something wrong, contact support...</p>;
  }

  if (!videos) {
    return <p>Loading..</p>;
  }

  return (
    <>
      <Video video={video} />
      <main className="column__container">
        <div className="column__content">
          <VideoDescription video={video} />
          <VideoForm video={video} />
          <VideoComments video={video} />
        </div>
        <aside className="related__videos">
          <NextVideos videos={videos.filter((v) => v.id !== video?.id)} />
        </aside>
      </main>
    </>
  );
};

export default MainPage;

