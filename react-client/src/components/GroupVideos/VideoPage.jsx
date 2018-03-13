import VideoPlayer from './VideoPlayer.jsx';
import VideoList from './VideoList.jsx';
import VideoListEntry from './VideoListEntry.jsx'
import React from 'react';



class VideoPage extends React.Component{
  constructor(props){
    super(props);
  }
render(){
  return (
  <div>
    <h1 id='groupTitle'> Group Videos</h1>
      <div className="col-md-7" >
        <VideoPlayer/>
      </div>
      <div className="col-md-5">
          <VideoList/>
      </div>
  </div>
  )
}
//tis is the first and original closing braket
}
export default VideoPage;
