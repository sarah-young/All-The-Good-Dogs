import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import BreedList from './BreedList';
import { changeDoggo } from '../App'; // ?? Is this the best way to import function?

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = { dogs: Dogs.message, changeDoggo: changeDoggo } , state=null) => {
  const wrapper = shallow(<BreedList />);
  if (state) wrapper.setState(state);
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {

});

// Test to see if axios call works




// Test to see if number of buttons matches number of dog breeds in List

// Test to see if rendering without failure

// Test to see if footer is rendering correctly

// Test to see if random button is rendering

// Test to see if breedlist is in fact a list
