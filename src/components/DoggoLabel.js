import React from 'react';

class DoggoLabel extends React.Component {
  render() {
    const message = this.props.message;
    return (
      <div className="doggo-label" data-test="doggo-label">
        <h1 className="app-title" data-test="app-title">All The Good Dogs <span role="img" aria-label="dog">🐾</span></h1>
        <h3 data-test="message-div">Dog Type: <br /> <mark>{message}</mark></h3>
      </div>
    );
  }
}

export default DoggoLabel;
