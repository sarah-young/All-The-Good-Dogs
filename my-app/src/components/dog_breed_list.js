import React from 'react';

const BreedListBlock = (props) => {
  const dogBreedButtons = props.dogs.message
}

// Create function that takes in object from App props
// Returns button list UI

let dogBreeds =
// API CALL TO DOG-CEO

let breeds = dogBreeds.message;
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
console.log(dogBreedList);
