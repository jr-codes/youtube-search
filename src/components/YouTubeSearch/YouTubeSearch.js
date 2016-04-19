import React, { Component, PropTypes } from 'react';
import SearchBox from '../SearchBox';
import SearchResults from '../SearchResults';
import debounce from 'lodash/debounce';
import sortBy from 'lodash/sortBy';

class YouTubeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [
                // { id: 123, thumbnail: '', title: '' }
            ]
        };
    }

    componentWillMount() {
        this.search = debounce(this.search, this.props.debounce);
    }

    mapResults(results) {
        return results.map(item => ({
            url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            id: item.id.videoId,
            thumbnail: item.snippet.thumbnails.medium.url,
            title: item.snippet.title
        }));
    }

    buildQueryString(parameters) {
        return Object.keys(parameters)
            .map(key => `${key}=${parameters[key]}`)
            .reduce((result, value) => `${result}&${value}`);
    }

    search(query) {
        const { apiKey, maxResults } = this.props;
        const queryString = this.buildQueryString({
            key: apiKey,
            maxResults,
            part: 'snippet,id',
            q: encodeURIComponent(query),
            type: 'video'
        });
        const url = `https://www.googleapis.com/youtube/v3/search?${queryString}`;

        fetch(url)
            .then(response => response.json())
            .then(json => this.mapResults(json.items))
            .then(items => sortBy(items, 'title'))
            .then(results => this.setState({ results }));
    }

    render() {
        const onSearch = query => this.search(query);
        return (
            <div className="search">
                <SearchBox onSearch={onSearch} />
                <SearchResults results={this.state.results} />
            </div>
        );
    }
}

YouTubeSearch.defaultProps = {
    maxResults: 24,
    debounce: 500
};

YouTubeSearch.propTypes = {
    apiKey: PropTypes.string,
    maxResults: PropTypes.number,
    debounce: PropTypes.number
};

export default YouTubeSearch;
