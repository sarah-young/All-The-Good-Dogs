import React from 'react';
import { shallow } from 'enzyme';
import DoggoLabel from './DoggoLabel';

const setup = (props={}, state=null) => {
  const wrapper = shallow(<DoggoLabel />);
  if (state) wrapper.setState(state);
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

const wrapper = setup();

test('main div renders without error', () => {
  const doggoLabel = findByTestAttr(wrapper, "doggo-label");
  expect(doggoLabel.length).toBe(1);
});
test('app title renders without error', () => {
  const appTitle = findByTestAttr(wrapper, "app-title");
  expect(appTitle.length).toBe(1);
});
test('message div renders without error', () => {
  const messageDiv = findByTestAttr(wrapper, "message-div");
  expect(messageDiv.length).toBe(1);
});

test('message div contains correct text', () => {
  wrapper.setProps({ message: 'Hello World!' });
  const messageDiv = findByTestAttr(wrapper, "message-div");
  expect(messageDiv.text()).toContain("Hello World!")
});
