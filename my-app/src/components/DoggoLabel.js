import React from 'react';

class DoggoLabel extends React.Component {
  render() {
    const message = this.props.message;
    return (
      <div className="doggo-label w3-col s12 m12 l12"><h3>Dog Type: {message}</h3></div>
    );
  }
}

export default DoggoLabel;
