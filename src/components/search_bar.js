import React, {Component} from 'react';

class SearchBar extends Component{ 
    
    constructor(props){
        super(props);
        this.state = { searchText: ''};
    }

    render() {
       return (
           <div>
                <input
                    value = {this.state.searchText} 
                    onChange = { event => this.setState({searchText: event.target.value})} />
            </div>
       );
    }

}

export default SearchBar;

