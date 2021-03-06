import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string,
};

export default class DownloadButton extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  }

  render() {
    //const { player, className } = this.props;
    //const { currentSrc } = player;
    

    return (
      <div class="media">
        <img class="align-self-center mr-2" src="./images/share.svg" 
            alt="triangle with all three sides equal"
            height="40px"
            width="40px"
        />
        <div class="media-body">
          <p class="font-italic text-left pt-4">Share your FCBayern Moment</p>  
        </div>
        
      </div>
      //<a
      //  ref={
      //    (c) => {
      //      this.button = c;
      //    }
      //  }
        //className={classNames(className, {
        //  'video-react-control': true,
        //  'video-react-button': true,
        //})} 
        //href={currentSrc}
        //download
      //  style={{
          //backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTE5IDloLTRWM0g5djZINWw3IDcgNy03ek01IDE4djJoMTR2LTJINXoiLz4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)',
      //    backgroundImage: 'url(./images/share.svg)',
      //    backgroundRepeat: 'no-repeat',
      //    backgroundPosition: 'center'
      //  }}
      //  tabIndex="0"
      //  onClick={this.handleClick}
      ///>
    );
  }
}

DownloadButton.propTypes = propTypes;