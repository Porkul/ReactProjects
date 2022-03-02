import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

/*  function based component:
    const App = () => {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err =>console.log(err)
        );
        return (
            <div>Latitude:  </div> <----- we care only about Latitude that is inside  position object
        );
    };
*/

//class based components:
class App extends React.Component {
    /*  code below equals the same as state = { lat: null, errorMessage: '' }
        constructor(props) {
            super(props);
            this.state = { lat: null, errorMessage: '' };
        }
    */
    state = { lat: null, errorMessage: '' };
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(//callback
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    };

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div> 
         }
 
         if(!this.state.errorMessage && this.state.lat){
             //prop={state}
             return <SeasonDisplay lat={this.state.lat} /> 
          }
          
         return <Spinner message="Please accept the location request" />;
    }

    render() {
        return (
            <div className='border red'>
                {this.renderContent()}
            </div>
        );
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
