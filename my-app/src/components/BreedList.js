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
    rows.push(<Breed breed={keylist[i]} key={keylist[i]} id={keylist[i]} changeDoggo={changeDoggo}/>)
    } else { for (j = 0; j < breedlistobj[keylist[i]].length; j++) {
    rows.push(<Breed breed={breedlistobj[keylist[i]][j] + " " + keylist[i]} key={"k"+keylist[i]+"-"+breedlistobj[keylist[i]][j]} id={keylist[i]+"-"+breedlistobj[keylist[i]][j]}/>)
      }
    }
  }

    return (
      <div className="container">
      <div className="breed-list w3-col l6 m6">
      <div name={title} className="dog-breed-list-container">
      {rows}
      </div>
      </div>
      </div>
    );
  }
}

export default BreedList;
