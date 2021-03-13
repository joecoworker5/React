//Import the React and ReactDOM library
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = function(){
    const buttonText = {text:'click me'};
    return (
    <div>
      <label className="label" for="name">Enter Name:</label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color:'white'}}>{buttonText.text}</button>
    </div>
    )

};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')  
);