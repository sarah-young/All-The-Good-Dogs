import React from 'react';

class DoggoLabel extends React.Component {
  render() {
    const message = this.props.message;
    return (
      <div className="doggo-label message w3-col">Dog Type: {message}</div>
    );
  }
}

export default DoggoLabel;
