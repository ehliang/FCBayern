import React, { Component } from 'react';
import logo from './FCBayern-Logo-3C-W.png';
import './App.css';
import "../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to FCBayern Hackdays!</h1>
        </header>
        <p className="App-intro">
          Let's see your reaction in the match!
        </p>
        <Player
          playsInline
          poster="/assets/poster.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </div>
    );
  }
}

export default App;
