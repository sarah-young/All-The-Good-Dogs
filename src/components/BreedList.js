import React from 'react';
import Breed from './Breed';


//Breed List Component
class BreedList extends React.Component {

  render() {
    const changeDoggo = this.props.changeDoggo;
    const breedlistobj = this.props.dogs;
    const title = "Dog Breed List";
    const rows = [];

    let keylist = Object.keys(breedlistobj);
    let i; let j;
    for (i = 0; i < keylist.length; i++) {
      if (breedlistobj[keylist[i]].length === 0) {

    rows.push(<Breed breed={keylist[i]}
              key={keylist[i]}
              id={keylist[i]}
              changeDoggo={changeDoggo}/>)

    } else { for (j = 0; j < breedlistobj[keylist[i]].length; j++) {
    rows.push(<Breed breed={breedlistobj[keylist[i]][j]
              + " " + keylist[i]} key={"k"+keylist[i]
              +"-"+breedlistobj[keylist[i]][j]} id={keylist[i]+"-"
              + breedlistobj[keylist[i]][j]} changeDoggo={changeDoggo}/>)
    //TODO: Change variable names so this is more readable
      }
    }
  }

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
