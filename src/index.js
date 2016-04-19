require('es6-promise').polyfill();
require('whatwg-fetch');

import React from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from './components/YouTubeSearch';
import './styles/main.scss';

ReactDOM.render(
    <YouTubeSearch apiKey="AIzaSyD_qBykuQzEf6-H3AwpDBQQFE1HZVtI8ec" />,
    document.getElementById('youtube-search')
);

// https://github.com/reactjs/redux/pull/1455/files
// https://github.com/gaearon/react-transform-boilerplate
