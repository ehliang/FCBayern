import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

import "typeface-roboto";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
            <div className="overlayContainer">
                <div className="exactCenter">
                    <div className="bayernLogo">
                        <img src={require('./FCBayern-Logo-3C-W.png')} alt="FCBayern"/>
                    </div>
                    <h1 className="display-6">FCBayern: 0 - Werder Bremen: 0</h1>
                    <h1 className="display-6">21.01.17. Allianz Arena</h1>
                </div>
            </div>

            <div className="row fh">
                <div className="col-6 d-flex align-items-center">
                    <Player playsInline autoPlay poster="/assets/poster.png" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                </div>
                <div className="col-6 d-flex align-items-center">
                    <Player playsInline autoPlay poster="/assets/poster.png" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
