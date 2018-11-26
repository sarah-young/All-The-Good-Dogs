import React from 'react';
import Breed from './Breed';


//Breed List Component
class BreedList extends React.Component {


  render() {
    const changeDoggo = this.props.changeDoggo;
    const breedlistobj = this.props.dogs;
    const title = "Dog Breed List";
    const rows = [];
    const keylist = Object.keys(breedlistobj)

    keylist.forEach(function(dog) {
      let x = breedlistobj[dog].map(x => x);
      // This could be further refactored to put the if statement in the mapping?
      let breed;
      if (x.length){
        x.forEach(function(subBreed) {
          breed = `${subBreed} ${dog}`
          rows.push(
          <Breed
            breed = {breed}
            key = {breed}
            id = { `${dog}-${subBreed}` }
            changeDoggo = {changeDoggo}
          />);
          })
        } else {
          breed = `${dog}`
          rows.push(
          <Breed
            breed = {breed}
            id = {breed}
            key = {breed}
            changeDoggo = {changeDoggo}
          />);
        }
    }
)
    rows.push(<Breed breed="random" key="random" id="random" changeDoggo={changeDoggo}/>)

    return (
      <div name={title} className="dog-breed-list-container" data-test="dog-breed-list">
      {rows}
      <div className="doggo-footer">
      <a href="https://dog.ceo/dog-api"> <img src="https://dog.ceo/img/dog-api-logo.svg" alt="dog ceo logo" className="doggo-logo"/>  Powered by Dog API</a>
      </div>
      </div>
      );
    }
}

export default BreedList;
