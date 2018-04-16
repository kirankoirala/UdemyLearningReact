import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY_YOU_TUBE = 'AIzaSyC8c18rZjqWVjQ3_-KK6Cx__BtqlEqZphc';
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
        );  
}

ReactDOM.render(<App />,
    document.getElementById('mainDiv'));