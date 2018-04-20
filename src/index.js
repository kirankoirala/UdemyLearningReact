import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carsLoaded:false,
            cars: [],
            error:''
        };  
    }
    componentDidMount() {
        fetch("http://localhost:58475/api/cars", 
        {
            mode:'GET',
            header: {Accept:'application/json'}
        }).then(response => {
            if (response.ok) {
              response.json().then(json => {
                this.setState({cars:json, carsLoaded:true})
              });
            }
        }).catch(error => console.log(error))
      }

    render () {
        if (this.state.carsLoaded){
            return (
                <div>
                    <p>Cars loaded:{this.state.carsLoaded.toString()}</p>
                    <p>cars:</p>  
                    <ul>
                        {this.state.cars.map((car)=>{
                           return <li key={car.name}>{car.name}</li>
                        })}
                    </ul>
                    
                </div>
                );  
            }
        
        else{
            return <p>I am not ready yet. Loading...</p>
        }
    }
}

ReactDOM.render(<App />,
    document.getElementById('mainDiv'));