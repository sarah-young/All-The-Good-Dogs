import React from 'react';
import BreedList from './components/BreedList';
import DoggoLabel from './components/DoggoLabel';
import DoggoPicture from './components/DoggoPicture';

//Main App Component
 class App extends React.Component {
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
