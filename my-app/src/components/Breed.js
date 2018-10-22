import React from 'react';


class Breed extends React.Component {
  render() {
    const breed = this.props.breed;

    return (
      <option className="dog-breed-button" id={breed}>{breed}</option>
    );
  }
}

export default Breed;
