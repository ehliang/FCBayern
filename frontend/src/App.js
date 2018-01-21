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
import ShareButton from './shareButton'

const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm',
};


class Videoplayer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources['bunnyMovie'],
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      player: state,
    });

    const { player } = this.refs.player.getState();
    const currentTime = player.currentTime;
    const ended = player.ended;
    if(ended){
      console.log("currentTime:"+currentTime+", isEnd:"+ended);
      this.refs.player.load();
    }
  }

  play() {
    this.refs.player.play();
  }

  pause() {
    this.refs.player.pause();
  }

  load() {
    this.refs.player.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.refs.player.getState();
      const currentTime = player.currentTime;
      this.refs.player.seek(currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.refs.player.seek(seconds);
    };
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.refs.player.getState();
      const volume = player.volume;
      this.refs.player.volume = volume + steps;
    };
  }

  setMuted(muted) {
    return () => {
      this.refs.player.muted = muted;
    };
  }


  render() {
    const sourcePath = this.props.path;
    return (
      <Player
        ref="player"
        autoPlay={true}
        fluid={false}
        startTime={49}
      >
        <source src={sourcePath} />
        <ControlBar autoHide={true}>
          <ShareButton order={7} />
        </ControlBar>
      </Player>
    )
  }
  
}


class App extends Component {
  
  constructor(props, context) {
    super(props, context);

    this.state = {
      showThumbnails: false,
      showNav: true,
      showPlayButton: false,
      showGalleryPlayButton: false,
      showFullscreenButton: false,
      showBullets: true,
    };
  }

  handleClick = () => {
    console.log('this is:', this);
  }
  _onImageClick(event) {
    console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
  }

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
        thumbnail: './images/logo.svg'
      },
      {
        id: 3,
        original: './images/sap-logo-svg.svg',
        thumbnail: './images/sap-logo-svg.svg'
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
                    <Videoplayer id="video_player"
                      path="http://media.w3.org/2010/05/sintel/trailer.mp4" />
                  </div>
                </div>

                <div className="col-6 d-flex align-items-center">  
                  <div id="video_box">
                    <Videoplayer id="video_player"
                      path="http://media.w3.org/2010/05/bunny/movie.mp4" />
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

            <button onClick={this._onImageClick}>
              next
            </button>
            <button onClick={this.handleClick}>
              previous
            </button>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
