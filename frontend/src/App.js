import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "../node_modules/video-react/dist/video-react.css";
import { Player, ControlBar } from 'video-react';
import ImageGallery from 'react-image-gallery';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "typeface-roboto";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Helmet from 'react-helmet';

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
        <Helmet bodyAttributes={{style: 'background-color : #000000'}}/>
     {/*    <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to FCBayern Hackdays!</h1>
        </header>
        <p className="App-intro">
          Let's see your reaction in the match!
        </p>
      */}
        <div className="container-fluid">
             <div className="overlayContainer">
                <div className="exactCenter">
                    <div className="bayernLogo">
                        <img src={require('./FCBayern-Logo-3C-W.png')} alt="FCBayern"/>
                    </div>
                    <h4 className="display-6">FCBayern: 0 - Werder Bremen: 0</h4>
                    <h4 className="display-6">21.01.17. Allianz Arena</h4>
                </div>
            </div> 

            <div className="row fh">
                <div className="col-6 d-flex align-items-center">
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
        <div className="row">
        <div className="col-12">
            <footer class="footer">
                <div class="container text-center">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-flickr"></i></a>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                </div>
            </footer>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
