import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = React.createClass({
    renderResults: function(results) {
        return results.map(function(result) {
            return <SearchResult key={result.id} url={result.url} thumbnail={result.thumbnail} title={result.title} />
        })
    },

    render: function() {
        const items = this.renderResults(this.props.results);

        return (
            <div className="search__results">
                {items}
            </div>
        );
    }
});

export default SearchResults;
