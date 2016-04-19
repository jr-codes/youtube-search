import React, { PropTypes } from 'react';

const SearchResult = ({ url, thumbnail, title }) =>
    <a className="search__result" href={url} target="_blank">
        <img className="search__result-image" src={thumbnail} alt={title} />
        <span className="search__result-title">{title}</span>
    </a>;

SearchResult.propTypes = {
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
};

export default SearchResult;
