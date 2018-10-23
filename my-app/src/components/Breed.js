import React from 'react';

class Breed extends React.Component {

  buttonClicked(e) {
    const id = e.target.id;
    this.props.changeDoggo(id);
  }

  render() {
    const breed = this.props.breed;
    const id = this.props.id;
    return (
      <button
        className="dog-breed-button"
        id={id}
        onClick={this.buttonClicked.bind(this)}>

        {breed}

      </button>
    );
  }
}

export default Breed;
