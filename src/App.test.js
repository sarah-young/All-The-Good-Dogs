import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state=null) => {
  const wrapper = shallow(<App />);
  if (state) wrapper.setState(state);
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
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
  })
});
