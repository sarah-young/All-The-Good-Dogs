import React from 'react';
import Breed from './Breed';


//Breed List Component
class BreedList extends React.Component {

  render() {
    const imageterm = this.props.imageterm;
    const breedlistobject = this.props.dogs;
    const title = "Dog Breed List";
    const rows = [];
    const getDog = this.props.getDog;
    let keylist = Object.keys(breedlistobject);
    console.log(keylist);
    let i; let j;
    for (i = 0; i < keylist.length; i++) {
      if (breedlistobject[keylist[i]].length === 0) {
    rows.push(<Breed breed={keylist[i]} key={"breed-list-" + keylist[i]} />)
    } else { for (j = 0; j < breedlistobject[keylist[i]].length; j++) {
    rows.push(<Breed breed={breedlistobject[keylist[i]][j] + " " + keylist[i]} id={keylist[i]+"-"+breedlistobject[keylist[i]][j]}/>)
      }
    }
  }

    return (
      <div className="container">
      <div className="breed-list w3-col l6 m6">
      <select name={title} className="dog-breed-list-container">
      {rows}
      </select>
      </div>
      </div>
    );
  }
}

export default BreedList;
