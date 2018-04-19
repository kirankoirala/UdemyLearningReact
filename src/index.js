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

        this.state = {
            selectedVideo: null,
            videos: [],
            loadingCars:false,
            cars: [],
            error:''
        };

        //this.getCars();

        this.getYoutubeVideos();
    }

    componentDidMount() {
        fetch("http://localhost:58476/api/cars", 
             {method:'GET',
                "mode": 'no-cors',
                "Access-Control-Allow-Origin":"*",
                "Content-Type": "application/json"    })
            .then(response => response.json)
            .then(carList => this.setState({
                loadingCars:true,
                cars: carList
            }))
            .catch(error => console.log(error))
      }

    getYoutubeVideos() {
        YTSearch({ key: API_KEY_YOU_TUBE, term: 'nepali' }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render () {
    return (
        <div>
             <p>Rendering cars...</p>
             <p> Error...{this.state.error}</p>
             <p>isLoaded:{this.state.loadingCars}</p>
            <p>cars: {this.state.cars.length}
                {this.state.cars.Name}
            </p>  

            <SearchBar />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos = {this.state.videos} 
            />
            
            

        </div>
        );  
    }
}

ReactDOM.render(<App />,
    document.getElementById('mainDiv'));