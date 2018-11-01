import React from 'react';
import DoggoPicture from './DoggoPicture';

jest.mock('./DoggoPicture');

// Create test that takes in imageterm & url and renders the URL with correct HTML attributes

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  DoggoPicture.mockClear();
});

test('render url with correct html', () => {

});


expect(DoggoPicture())
