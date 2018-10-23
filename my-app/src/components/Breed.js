import React from 'react';

class Breed extends React.Component {

  buttonClicked(e) {
    const id = e.target.id;
    const imageterm = e.target.name;
    this.props.changeDoggo(id, imageterm);
  }

  render() {
    const breed = this.props.breed;
    const id = this.props.id;
    return (
      <button
        className="dog-breed-button"
        id={id}
        name={breed}
        onClick={this.buttonClicked.bind(this)}>

        {breed}

      </button>
    );
  }
}

export default Breed;
