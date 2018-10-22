import React from 'react';
import axios from 'axios';

class DoggoPicture extends React.Component {

  render() {
    const imageterm = this.props.imageterm;
    const imageURL = this.props.imageURL;

    return (
      <img src={imageURL} alt={imageterm} className="doggo-image w3-col l6 m6" />
    );
  }
}

export default DoggoPicture;
