import React, { Component } from 'react';


export default class NavButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      console.log("click!");
      console.log("click:"+this.state.text);
  }

  render() {
    const text = this.props.text;
    return (
      <button type="button" class="btn btn-primary" onClick={(e) => this.handleClick(e)}>
        {text}
      </button>
    );
  }
}
