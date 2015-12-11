import React from 'react';

const SearchBox = React.createClass({
    handleChange: function(event) {
        this.props.onSearch(event.target.value);
    },

    render: function() {
        return (
            <input className="search__box" type="text" placeholder="Search YouTube" onChange={this.handleChange} />
        );
    }
});

export default SearchBox;
