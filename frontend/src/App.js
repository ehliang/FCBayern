import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "../node_modules/video-react/dist/video-react.css";
import { Player, ControlBar, FullscreenToggle } from 'video-react';
import ImageGallery from 'react-image-gallery';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "typeface-roboto";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Helmet from 'react-helmet';
import ShareButton from './shareButton'
import NavButton from './navButton'
import DownloadButton from './downloadButton';


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
      //console.log("currentTime:"+currentTime+", isEnd:"+ended);
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
        fluid={true}
      >
        <source src={sourcePath} />
        <ControlBar autoHide={true}>
          <FullscreenToggle disabled />
          
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
      showNav: false,
      showPlayButton: false,
      showGalleryPlayButton: false,
      showFullscreenButton: false,
      showBullets: true,
      value : '',
      valueRight: '',
    };
    
  }

  handleTextChange = (e) =>{ 
    this.setState({value: e.target.value});
  }

  handleTextChangeRight = (e) =>{ 
    this.setState({valueRight: e.target.value});
  }

  handleClick = () => {
    console.log("click previous");
    console.log('this is:', this);
  }
  _onImageClick(event) {
    console.log("click");
    console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
  }

  activateLasers() {
    document.getElementById('leftSideImg').src="./images/sap-logo-svg.svg";
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
        original: './images/miasanmia.png',
        thumbnail: './images/miasanmia.png'
      },
      {
        id: 3,
        original: './images/sap-logo-svg.svg',
        thumbnail: './images/sap-logo-svg.svg'
      },
      {
        id: 4,
        original: './images/bundesliga.png',
        thumbnail: './images/bundesliga.png'
      }
    ]

    var FontAwesome = require('react-fontawesome');

    let textPath = `xlink:href="#curve"`;

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
              <Videoplayer id="video_player1"
                path="./images/Muller_Goal.mp4" />
            </div>
            </div>
          

          <div className="col-6 d-flex align-items-center">  
            <div id="video_box">
              <Videoplayer id="video_player2"
                path="http://media.w3.org/2010/05/bunny/movie.mp4" />
            </div>    
          </div>
          </div>
        

        <div className="row">
          <div className="overlayContainer">
              <div className="exactCenter">
                  <div className="bayernLogo">
                        <img src={require('./FCBayern-Logo-3C-W.png')} alt="FCBayern"/>
                  </div>
                  <h4 className="display-6">FCBayern: 0 - Werder Bremen: 0</h4>
                  <h4 className="display-6">21.01.17. Allianz Arena</h4>
                </div>
                <div className="leftSide">
                <div className="bayernLogo">
                  <h1>{this.state.value}</h1>
                </div>
              </div>
              <div className="rightSide">
                <div className="bayernLogo">
                  <h1>{this.state.valueRight}</h1>
                </div>
              </div>
          </div>

          <div className="col-4">
          <h5 className="display-6">Tag your moments!</h5>
            <form>              
              <label>
              <input type="text" value={this.state.value} onChange={this.handleTextChange} placeholder="Label your video!"/>
              </label>
            </form>
          </div>

          <div className="col-4">
          <h4>Share your FCBayern moment!</h4>
          
          <footer className="footer">
                <div className="container text-center">
                    <a href="#" onClick={this.activateLasers}><i className="fa fa-facebook-square fa-3x"></i></a>
                    <a href=""><i className="fa fa-twitter-square fa-3x"></i></a>
                    <a href=""><i className="fa fa-instagram fa-3x"></i></a>
                    <a href=""><i className="fa fa-flickr fa-3x"></i></a>
                    <a href=""><i className="fa fa-google-plus-square fa-3x"></i></a>
                </div>
            </footer>
          </div>

          <div className="col-4">
          <h5 className="display-6">Tag your moments!</h5>
            <form>              
              <label>
                <input type="text" value={this.state.valueRight} onChange={this.handleTextChangeRight} placeholder="Label your video!"/>
              </label>
            </form>

          </div> 
          
        </div>

        
        <div className="col-12">
            
        </div>
        </div>
        </div>
        
    );
  }
}

export default App;
