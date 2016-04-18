import React, { Component, PropTypes } from 'react';
import SearchResult from './SearchResult';

class SearchResults extends Component {
    renderResults(results) {
        return results.map(result =>
            <SearchResult
                key={result.id}
                url={result.url}
                thumbnail={result.thumbnail}
                title={result.title} />
        );
    }

    render() {
        const items = this.renderResults(this.props.results);

        return (
            <div className="search__results">
                {items}
            </div>
        );
    }
}

SearchResults.propTypes = {
    results: PropTypes.array
};

export default SearchResults;
