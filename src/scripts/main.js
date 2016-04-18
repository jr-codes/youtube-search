import React from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from './components/YouTubeSearch';
import '../styles/main.scss';

ReactDOM.render(
    <YouTubeSearch
        searchUrl="https://www.googleapis.com/youtube/v3/search"
        watchUrl="https://www.youtube.com/watch"
        apiKey="AIzaSyD_qBykuQzEf6-H3AwpDBQQFE1HZVtI8ec"
        throttle="1000" />,
    document.getElementById('youtube-search')
);
