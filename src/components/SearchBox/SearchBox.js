import React, { PropTypes } from 'react';

const SearchBox = ({ onSearch }) => {
    const onChange = event => onSearch(event.target.value);

    return (
        <input
            className="search__box"
            type="text"
            placeholder="Search YouTube"
            onChange={onChange} />
    );
};

SearchBox.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default SearchBox;
