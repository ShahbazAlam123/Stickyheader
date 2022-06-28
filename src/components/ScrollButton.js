import React, { Component } from 'react'

export default class ScrollButton extends Component {
     scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };
  render() {
    return (
      <div>
        <button onClick={this.scrollToTop}>Go Top</button>
      </div>
    )
  }
}
