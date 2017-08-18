import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchBar = (props) => (
    <div>
        <input type={'text'} className={'searchBar form-control'} value={props.inputText} onChange={props.onChange}/>
        <Link to={'/search/'+props.inputText}>
            <button className={'btn btn-info'} onClick={props.onSearch}>
                <span className={'glyphicon glyphicon-search'}></span>
            </button>
        </Link>
        {
            props.inputText && 
            <button className={'btn'} onClick={props.onClear}>
                <span className={'glyphicon glyphicon-remove'}></span>
            </button>
        }
    </div>
);

SearchBar.propTypes = {
    searchString: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
    searchString: '',
};

export default SearchBar;
