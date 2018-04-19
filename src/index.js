import React, {Component} from 'react';
import ReactDOM from 'react-dom';



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
     
    render () {
        return (
            <div>
                <p>Rendering cars...</p>
                <p> Error...{this.state.error}</p>
                <p>isLoaded:{this.state.loadingCars}</p>
                <p>cars: {this.state.cars.length}
                    {this.state.cars.Name}
                </p>  
            </div>
            );  
        }
}

ReactDOM.render(<App />,
    document.getElementById('mainDiv'));