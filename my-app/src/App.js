import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
      selectedBreed: null,
      greeting: 'Select a dog breed.',
      isLoading: true
    }; //state
    console.log("Hi from state");
  } //constructor

componentDidMount() {
    axios.get(`https://dog.ceo/api/breeds/list/all`)
      .then(res => {
        const dogs = res.data;
        this.setState({ dogs });
      })
  } //componentDidMount

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>They Are All Good Dogs</h1>
        </header>
        <p>
        { this.state.selectedBreed }
        </p>
        <p>
        { this.state.greeting }
        </p>
      </div>
      // Insert doggo image in <p>
    );
  } //render
} // App

export default App;
