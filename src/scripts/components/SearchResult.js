import React from 'react';

const SearchResult = React.createClass({
    render: function() {
        return (
            <div className="search-result">
                <img src={this.props.thumbnail} alt={this.props.title} />
                <span>{this.props.title}</span>
            </div>
        );
    }
});

export default SearchResult;
