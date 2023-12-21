import "./Video.scss";

const Video = ({ selectedVideo }) => {
  return (
    <div className='video'>
    <video className='video__player' poster={selectedVideo.image}controls></video>

    </div>
  )
} 

export default Video