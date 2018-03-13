import React from 'react';
import VideoListEntry from './VideoListEntry.jsx';

var videoList = (props) => (
  <div className='video-list-media'>
    <VideoListEntry/>
    <VideoListEntry/>
    <VideoListEntry/>
    <VideoListEntry/>
  </div>
)

export default videoList;
