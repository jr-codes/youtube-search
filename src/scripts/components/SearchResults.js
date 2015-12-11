import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = React.createClass({
    renderResults: function(results) {
        return results.map(function(result) {
            return <SearchResult key={result.id} thumbnail={result.thumbnail} title={result.title} />
        })
    },

    render: function() {
        const items = this.renderResults(this.props.results);

        return (
            <ul className="search-results">
                <li>{items}</li>
            </ul>
        );
    }
});

export default SearchResults;
