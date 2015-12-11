import React from 'react';

const SearchResult = React.createClass({
    render: function() {
        return (
            <a className="search__result" href={this.props.url} target="_blank">
                <img className="search__result-image" src={this.props.thumbnail} alt={this.props.title} />
                <span className="search__result-title">{this.props.title}</span>
            </a>
        );
    }
});

export default SearchResult;
