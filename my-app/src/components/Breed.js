import React from 'react';


class Breed extends React.Component {
  render() {
    const breed = this.props.breed;

    return (
      <option className="dog-breed-button" id={breed} onClick="">{breed}</option>
    );
  }
}

export default Breed;
