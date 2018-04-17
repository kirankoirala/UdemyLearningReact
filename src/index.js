import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY_YOU_TUBE = 'AIzaSyCgx5KcjEMVD0Uk9m9gdMmELwr6ip1s7W0';



class App extends Component {

    constructor(props) {
        super(props);

        this.state = {videos: []}

        YTSearch({key:API_KEY_YOU_TUBE, term: 'hindi movie'}, (videos)=>{
            this.setState({videos}); //only works if key and values are the same name
        });
    }

    render () {
    return (
        <div>
            <SearchBar />
            <VideoDetail video={this.state.videos[0]}/>
            <VideoList videos = {this.state.videos} />
        </div>
        );  
    }
}

ReactDOM.render(<App />,
    document.getElementById('mainDiv'));