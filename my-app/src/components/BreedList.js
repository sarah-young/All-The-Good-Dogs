import React from 'react';
import axios from 'axios';
import Breed from './Breed';

//Breed List Component
class BreedList extends React.Component {

  render() {
    const breedlist = this.props.dogs;
    const title = "Dog Breed List";
    const rows = [];
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

  export default BreedList;
