import React from 'react';

class DoggoPicture extends React.Component {

  render() {
    const imageterm = this.props.imageterm;
    const imageURL = this.props.imageURL;

    return (
      <div className="doggo-image-container w3-col l6 m6 s12">
      <img src={imageURL} alt={imageterm} className="doggo-image" />
      </div>

    );
  }
}

export default DoggoPicture;
