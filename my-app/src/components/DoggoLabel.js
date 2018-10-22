import React from 'react';

class DoggoLabel extends React.Component {
  render() {
    const message = this.props.message;
    return (
      <div className="message w3-col">{message}</div>
    );
  }
}

export default DoggoLabel;