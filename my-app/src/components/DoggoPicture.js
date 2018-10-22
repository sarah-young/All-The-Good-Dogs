import React from 'react';

class DoggoPicture extends React.Component {
  render() {
    const image = this.props.image;
    const alt = this.props.alt;
    return (
      <img src={image} alt={alt} className="doggo-image w3-col l6 m6" />
    );
  }
}

export default DoggoPicture;
