import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <img className="d-flex mr-3" src={imageUrl} alt="Video thumbnail" />
        <div className="media-body">
          <h5 className="mt-0">{video.snippet.title}</h5>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;