import React from 'react';

const SearchBox = React.createClass({
    componentWillMount: function() {

    },

    handleChange: function(event) {
        this.props.onSearch(event.target.value);
    },

    render: function() {
        return (
            <input type="text" placeholder="Search YouTube" onChange={this.handleChange} />
        );
    }
});

export default SearchBox;
