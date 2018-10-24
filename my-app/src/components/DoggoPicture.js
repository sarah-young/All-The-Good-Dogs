import React from 'react';

class DoggoPicture extends React.Component {

  render() {
    const imageterm = this.props.imageterm;
    const imageURL = this.props.imageURL;

    return (
      <div className="frame">
      <span class="helper"></span>
      <img src={imageURL} alt={imageterm} className="doggo-image" />
      </div>
    );
  }
}

export default DoggoPicture;
