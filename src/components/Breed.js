import React from 'react';
class Breed extends React.Component {
  constructor(props) {
  super(props);
  this.buttonClicked = this.buttonClicked.bind(this);
}
  buttonClicked(e) {
    const id = e.target.id;
    const imageterm = e.target.name;
    this.props.changeDoggo(id, imageterm);
  }
// TODO: Simplify buttonClicked -- make more 'React'
// Pass props in as arguments
  render() {
    const breed = this.props.breed;
    const id = this.props.id;
    // TODO: Simplify this
    // Maybe move these up to constructor? Hm.
    return (
      <button
        className="dog-breed-button nested"
        id={id}
        name={breed}
        data-test="breed-button"
        onClick={this.buttonClicked}>
        { breed }
      </button>
    );
  }
}

export default Breed;
