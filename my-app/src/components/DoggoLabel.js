import React from 'react';

class DoggoLabel extends React.Component {
  render() {
    const message = this.props.message;
    return (
      <div className="doggo-label"><h3>Dog Type: {message}</h3></div>
    );
  }
}

export default DoggoLabel;
