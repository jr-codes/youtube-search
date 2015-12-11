import React from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from './components/YouTubeSearch';

ReactDOM.render(
    <YouTubeSearch url="https://www.googleapis.com/youtube/v3/search" apiKey="AIzaSyD_qBykuQzEf6-H3AwpDBQQFE1HZVtI8ec" throttle="750" />,
    document.getElementById('container')
);
