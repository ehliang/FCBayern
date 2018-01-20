import React, { Component } from 'react';
import logo from './FCBayern-Logo-3C-W.png';
import './App.css';
import "../node_modules/video-react/dist/video-react.css";
import { Player, ControlBar } from 'video-react';
import ImageGallery from 'react-image-gallery';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";

const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm',
};



class App extends Component {
  constructor(props, context) {
    super(props, context);

    /* this.images = [
      {
        id: 1,
        original: './FCBayern-Logo-3C-W.png',
        thumbnail: './FCBayern-Logo-3C-W.png',
      },
      {
        id: 2,
        original: './sap-logo-svg.svg',
        thumbnail: './sap-logo-svg.svg'
      },
      {
        id: 3,
        original: './logo-svg.svg',
        thumbnail: './logo.svg'
      }
    ] */

    this.state = {
      source: sources['bunnyMovie'],
      showThumbnails: false,
      showPlayButton: false,
      showGalleryPlayButton: false,
      showFullscreenButton: false,
      showBullets: true,
    };
  }

  

  componentDidMount() {
    // subscribe state change
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }


  render() {
    const images = [
      {
        id: 1,
        original: './images/fcbayern.svg',
        thumbnail: './images/fcbayern.svg',
      },
      {
        id: 2,
        original: './images/logo.svg',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/'
      },
      {
        id: 3,
        original: './images/sap-logo-svg.svg',
        thumbnail: 'fcbayern.jpg'
      }
    ]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to FCBayern Hackdays!</h1>
        </header>
        <p className="App-intro">
          Let's see your reaction in the match!
        </p>

        <div id="video_box">
          <div id="video_overlays"> 
            <ImageGallery id="overlay_images"
                          showThumbnails={this.state.showThumbnails} 
                          showPlayButton={this.state.showPlayButton}
                          showGalleryPlayButton={this.state.showGalleryPlayButton}
                          showFullscreenButton={this.state.showFullscreenButton}
                          showBullets={this.state.showBullets}
                          items={images} />
          </div>
          <Player
            ref="player"
            autoPlay={true}
            fluid={false}
            width={600}
            height={600}
          >
            <source src={this.state.source} />
            <ControlBar autoHide={true} />
          </Player>
        </div>

        <div id="video_box">
          <Player
            ref="player"
            autoPlay={true}
            fluid={false}
            width={400}
            height={400}
          >
            <source src={this.state.source} />
            <ControlBar autoHide={true} />
          </Player>
        </div>

      </div>
    );
  }
}

export default App;
