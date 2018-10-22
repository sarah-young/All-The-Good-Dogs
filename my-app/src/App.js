import React from 'react';
import axios from 'axios';

//Main App Component
 class App extends React.Component {
   constructor(props){
  super(props)
  this.state = {
    dogs: [],
    store: []
  }
}

  render() {
    return (
          <div className="app w3-row" >
            <h2 className="app-title w3-col l12 m12 s12">Dog Breed Selector <span role="img" aria-label="dog">🐶</span></h2>
            <DoggoPicture image="https://bit.ly/2J9UWFs" alt="dog eyes staring from screen"/>

            <BreedList breedlist= {doggoArray} />

            <DoggoLabel message="Welcome, select a dog breed."/>
          </div>
    );
  }
}

//Image Component
//Start off with default props
//Picture of a pawprint
class DoggoPicture extends React.Component {
  render() {
    const image = this.props.image;
    const alt = this.props.alt;
    return (
      <img src={image} alt={alt} className="doggo-image w3-col l6 m6" />
    );
  }
}

class DoggoLabel extends React.Component {
  render() {
    const message = this.props.message;
    return (
      <div className="message w3-col">{message}</div>
    );
  }
}

class Breed extends React.Component {
  render() {
    const breed = this.props.breed;

    return (
      <option className="dog-breed-button" idName={breed}>{breed}</option>
    );
  }
}

//Breed List Component
class BreedList extends React.Component {
  render() {
    const title = "Dog Breed List";
    const rows = [];
    const breedlist = this.props.breedlist;
    let i;
    for (i = 0; i < breedlist.length; i++) {
    rows.push(<Breed breed={breedlist[i]} />)
    }
    return (

      <div className="breed-list w3-col l6 m6">
      <select name={title} className="dog-breed-list-container">
      {rows}
      </select>
      </div>

      );
    }
  }


//Breed List object
//Replace object with API call eventually
const DogBreeds = {
    "status": "success",
    "message": {
        "affenpinscher": [],
        "african": [],
        "airedale": [],
        "akita": [],
        "appenzeller": [],
        "basenji": [],
        "beagle": [],
        "bluetick": [],
        "borzoi": [],
        "bouvier": [],
        "boxer": [],
        "brabancon": [],
        "briard": [],
        "bulldog": [
            "boston",
            "french"
        ],
        "bullterrier": [
            "staffordshire"
        ],
        "cairn": [],
        "cattledog": [
            "australian"
        ],
        "chihuahua": [],
        "chow": [],
        "clumber": [],
        "cockapoo": [],
        "collie": [
            "border"
        ],
        "coonhound": [],
        "corgi": [
            "cardigan"
        ],
        "cotondetulear": [],
        "dachshund": [],
        "dalmatian": [],
        "dane": [
            "great"
        ],
        "deerhound": [
            "scottish"
        ],
        "dhole": [],
        "dingo": [],
        "doberman": [],
        "elkhound": [
            "norwegian"
        ],
        "entlebucher": [],
        "eskimo": [],
        "germanshepherd": [],
        "greyhound": [
            "italian"
        ],
        "groenendael": [],
        "hound": [
            "afghan",
            "basset",
            "blood",
            "english",
            "ibizan",
            "walker"
        ],
        "husky": [],
        "keeshond": [],
        "kelpie": [],
        "komondor": [],
        "kuvasz": [],
        "labrador": [],
        "leonberg": [],
        "lhasa": [],
        "malamute": [],
        "malinois": [],
        "maltese": [],
        "mastiff": [
            "bull",
            "tibetan"
        ],
        "mexicanhairless": [],
        "mix": [],
        "mountain": [
            "bernese",
            "swiss"
        ],
        "newfoundland": [],
        "otterhound": [],
        "papillon": [],
        "pekinese": [],
        "pembroke": [],
        "pinscher": [
            "miniature"
        ],
        "pointer": [
            "german"
        ],
        "pomeranian": [],
        "poodle": [
            "miniature",
            "standard",
            "toy"
        ],
        "pug": [],
        "puggle": [],
        "pyrenees": [],
        "redbone": [],
        "retriever": [
            "chesapeake",
            "curly",
            "flatcoated",
            "golden"
        ],
        "ridgeback": [
            "rhodesian"
        ],
        "rottweiler": [],
        "saluki": [],
        "samoyed": [],
        "schipperke": [],
        "schnauzer": [
            "giant",
            "miniature"
        ],
        "setter": [
            "english",
            "gordon",
            "irish"
        ],
        "sheepdog": [
            "english",
            "shetland"
        ],
        "shiba": [],
        "shihtzu": [],
        "spaniel": [
            "blenheim",
            "brittany",
            "cocker",
            "irish",
            "japanese",
            "sussex",
            "welsh"
        ],
        "springer": [
            "english"
        ],
        "stbernard": [],
        "terrier": [
            "american",
            "australian",
            "bedlington",
            "border",
            "dandie",
            "fox",
            "irish",
            "kerryblue",
            "lakeland",
            "norfolk",
            "norwich",
            "patterdale",
            "russell",
            "scottish",
            "sealyham",
            "silky",
            "tibetan",
            "toy",
            "westhighland",
            "wheaten",
            "yorkshire"
        ],
        "vizsla": [],
        "weimaraner": [],
        "whippet": [],
        "wolfhound": [
            "irish"
        ]
    }
}

const DogBreedArrayCreator = (obj) => {
  let breeds = obj.message;
  // Loop through object & create list of keys (1)
  let breedList = Object.keys(breeds);
  // create new Array()
  let dogBreedList = [];
  // Iterate through map
  // > Create for loop
  let i; let j;
  for (i = 0; i < breedList.length; i++) {
    // iterate through keys of Object
    let dogType = breeds[breedList[i]];
    if (dogType.length === 0){
    dogBreedList.push(breedList[i]);
  } else {
    for (j = 0; j < dogType.length; j++) {
      dogBreedList.push(dogType[j] + " " + breedList[i]);
      }
    }
  }
  return dogBreedList;
}

let doggoArray = DogBreedArrayCreator(DogBreeds);

export default App;
