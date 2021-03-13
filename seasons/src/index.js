import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


//functional Component
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//        (position) => {
//             console.log(position);
//        },
//        (err) => {
//             console.log(err);
//        }
//     );

//     return <div>Hi there!</div>;
// }

class App extends React.Component {
    // constructor(props){
    //     super(props);//呼叫parent constuctor function
    //     this.state = { lat: null, errorMessage: ''};
    // }
    state = {lat: null, errorMessage: ''};
    
    componentDidMount () {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setstate to update state !!!
                this.setState({lat: position.coords.latitude});
                // we did not !!
                // this.state.lat = position.coords.latitudeS
            },
            err => {
                this.setState({errorMessage: err.message})
            }
        );
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        } else if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner message="Please accept location request"/>    
    }
    //React says we have to define render!!
    render() {
       return (
           <div className="border red">
               {this.renderContent()}
           </div>
       )
    }
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);