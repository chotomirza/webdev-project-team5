import React from 'react';
import results from '../../data/place.json';
import SearchItem from './search-item.js';

const ResultsList = () => {
    return(
        <ul className = "list-group">
            {
                results.map(item => <SearchItem
                key = {item.id} item={item}/>)
            }
        </ul>
    );
};


export default ResultsList;