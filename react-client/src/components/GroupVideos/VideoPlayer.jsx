import React from 'react';

var VideoPlayer = () => (
  <div className="video-player">
      <div>
       <iframe className="embed-responsive-item" width="700" height="480"
         src="https://www.youtube.com/embed/UhOcULRmSRc"
         frameBorder="0" allowFullScreen>
       </iframe>
    </div>
      <div className="video-player-details">
        <h3></h3>
        <div></div>
      </div>
    </div>
)

export default VideoPlayer;
