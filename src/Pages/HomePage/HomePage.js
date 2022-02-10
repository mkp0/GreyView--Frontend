import React from "react";
import ReactPlayer from 'react-player'
import Section from "./Section/Section"
function HomePage() {
  return (
    <div>
      {/* <iframe src="https://drive.google.com/file/d/1YxfHaQmvYVhe8bAR7pitXset_9kK--FC/preview" width="100%"  allow="autoplay"></iframe> */}
      <ReactPlayer url='https://www.youtube.com/watch?v=F2PKJhWl480' width="100%" height="80vh" loop ={true} controls ={false} />
      <Section/>
    </div>
  );
}

export default HomePage;
