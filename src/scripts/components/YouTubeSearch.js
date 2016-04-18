require('es6-promise').polyfill();
require('whatwg-fetch');

import React from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import throttle from 'lodash/throttle';
import sortBy from 'lodash/sortBy';

const YouTubeSearch = React.createClass({
    getDefaultProps: function() {
        return {
            maxResults: 24,
            throttle: 1000
        }
    },

    getInitialState: function() {
        return {
            results: [
                // { id: 123, thumbnail: '', title: '' }
            ]
        }
    },

    mapResults: function(results) {
        return results.map(item => ({
            url: `${this.props.watchUrl}?v=${item.id.videoId}`,
            id: item.id.videoId,
            thumbnail: item.snippet.thumbnails.medium.url,
            title: item.snippet.title
        }));
    },

    search: function(query) {
        const url = `${this.props.searchUrl}?key=${this.props.apiKey}&q=${encodeURIComponent(query)}&part=snippet,id&type=video&maxResults=${this.props.maxResults}`;

        fetch(url)
            .then(response => response.json())
            .then(json => this.mapResults(json.items))
            .then(items => sortBy(items, 'title'))
            .then(results => this.setState({ results: results }));
    },

    componentWillMount: function() {
        this.search = throttle(this.search, this.props.throttle);
    },

    handleSearch: function(query) {
        this.search(query);
    },

    render: function() {
        return (
            <div className="search">
                <SearchBox onSearch={this.handleSearch} />
                <SearchResults results={this.state.results} />
            </div>
        );
    }
});

export default YouTubeSearch;
