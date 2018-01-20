import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "../node_modules/video-react/dist/video-react.css";
import { Player, ControlBar } from 'video-react';
import ImageGallery from 'react-image-gallery';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "typeface-roboto";


const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm',
};


class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources['bunnyMovie'],
      showThumbnails: false,
      showNav: true,
      showPlayButton: false,
      showGalleryPlayButton: false,
      showFullscreenButton: false,
      showBullets: true,
    };
  }

  componentDidMount() {
    // subscribe state change
    this.refs.player1.subscribeToStateChange(this.handleStateChange.bind(this));

  }

  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      player1: state,
    });
  }

  handleClick = () => {
    console.log('this is:', this);
  }
  _onImageClick(event) {
    console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
  }

/* 
  onClick= {event => {
    this.slideToIndex.call(this, index, event);
    if (this.props.onThumbnailClick) {
      this.props.onThumbnailClick(event, index);
    }
  }} */

  render() {
    const images = [
      {
        id: 1,
        original: './images/FC_Bayern_Munich.png',
        thumbnail: './images/FC_Bayern_Munich.png',
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
     {/*    <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to FCBayern Hackdays!</h1>
        </header>
        <p className="App-intro">
          Let's see your reaction in the match!
        </p>
      */}
        <div className="container-fluid">
           {/*  <div className="overlayContainer">
                <div className="exactCenter">
                    <div className="bayernLogo">
                        <img src={require('./FCBayern-Logo-3C-W.png')} alt="FCBayern"/>
                    </div>
                    <h1 className="display-6">FCBayern: 0 - Werder Bremen: 0</h1>
                    <h1 className="display-6">21.01.17. Allianz Arena</h1>
                </div>
            </div> */}

            <div className="row fh">
                <div className="col-6 d-flex align-items-center">
                  <div id="video_box">
                    <div id="video_overlays"> 
                      <ImageGallery 
                            ref={i => this._imageGallery = i}
                            showThumbnails={this.state.showThumbnails} 
                            showPlayButton={this.state.showPlayButton}
                            showGalleryPlayButton={this.state.showGalleryPlayButton}
                            showFullscreenButton={this.state.showFullscreenButton}
                            showBullets={this.state.showBullets}
                            showNav={this.state.showNav}
                            items={images} 
                            onClick={this._onImageClick.bind(this)}
                            additionalClass="app-image-gallery"/>
                    </div>
                    <Player
                      ref="player1"
                      autoPlay={true}
                      fluid={false}
                    >
                      <source src={this.state.source} />
                      <ControlBar autoHide={true} />
                    </Player>
                  </div>
                </div>

                <div className="col-6 d-flex align-items-center">  
                  <div id="video_box">
                    <Player
                      ref="player2"
                      autoPlay={true}
                      fluid={false}
                    >
                      <source src={this.state.source} />
                      <ControlBar autoHide={true} />
                    </Player>
                  </div>    
                </div>
                
            </div>

            <button onClick={this._onImageClick}>
              next
            </button>
            <button onClick={this.handleClick}>
              previous
            </button>
        </div>
      </div>
    );
  }
}

export default App;
