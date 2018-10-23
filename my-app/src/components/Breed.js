import React from 'react';


class Breed extends React.Component {
  render() {
    const breed = this.props.breed;
    const id = this.props.id
    return (
      <option className="dog-breed-button" id={id} >{breed}</option>
    );
  }
}

export default Breed;
