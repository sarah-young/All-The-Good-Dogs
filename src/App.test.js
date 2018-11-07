import React from 'react';
import { shallow } from 'enzyme';
import App, { changeDoggo } from './App';
import moxios from 'moxios';

const setup = (props = {}, state=null) => {
  const wrapper = shallow(<App />);
  if (state) wrapper.setState(state);
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

const dogObjectRandom = {
  "status":"success",
  "message":"https:\/\/images.dog.ceo\/breeds\/saluki\/n02091831_2338.jpg"
}

const dogObject = {
  "status":"success",
  "message":"https:\/\/images.dog.ceo\/breeds\/terrier-american\/n02093428_18993.jpg"
}


test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'container-component');
  expect(component.length).toBe(1);
});
// See if component is rendering base component

describe('see if chain of components are rendering correctly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test('container div renders without error',()=> {
    const component = findByTestAttr(wrapper, 'container-component');
    expect(component.length).toBe(1);
  });
  test('DoggoPicture div renders w/o error', () => {
    const doggoPicture = findByTestAttr(wrapper, "doggo-picture");
    expect(doggoPicture.length).toBe(1);
  });
  test('DoggoLabel component renders without error', () => {
    const doggoLabel = findByTestAttr(wrapper, "doggo-label");
    expect(doggoLabel.length).toBe(1);
  });
  test('BreedList component renders without error', () => {
    const breedList = findByTestAttr(wrapper, 'breed-list');
    expect(breedList.length).toBe(1);
  });
});
// API call test using moxios
describe('Test if Dog API is being called when state.id === `random`', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('adds dog list to state', () => {

  });
});

describe('Test behavior of API when id !== random', () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://dog.ceo/api/breed/terrier-american/images/random', {
      status: 200,
      response: dogObject,
    });
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('tests that API call is made', () =>{

  });
  test('tests that state updates correctly', () =>{

  });
});
