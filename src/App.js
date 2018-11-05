import React from 'react';
import axios from 'axios';
import BreedList from './components/BreedList';
import DoggoPicture from './components/DoggoPicture';
import DoggoLabel from './components/DoggoLabel';

//Main App Component
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dogs: [],
      imageterm: 'random',
      isLoading: false,
      imageURL: null,
      id: null
    }
  }
  // Method on class that is triggered by onClick event
  changeDoggo(id, imageterm) {
    if (id !== "random") {
      axios.get('https://dog.ceo/api/breed/' + id + '/images/random')
        .then(json => this.setState({
          imageURL: json.data.message,
          id: id,
          imageterm: imageterm
        }))
        .catch(error => alert(error))
    } else {
      axios.get('https://dog.ceo/api/breeds/image/random')
        .then(json => this.setState({
          imageURL: json.data.message,
          id: id,
          imageterm: imageterm
        }))
        .catch(error => alert(error))
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(json => this.setState({
        dogs: json.data.message,
        isLoading: false
      }))
      .catch(error => alert(error))

    if (this.state.imageterm === 'random') {
      axios.get('https://dog.ceo/api/breeds/image/random')
        .then(json => this.setState({
          imageURL: json.data.message
        }))
        .catch(error => alert(error))
    } else {
      axios.get('https://dog.ceo/api/breed/' + this.state.imageterm + '/images/random')
        .then(json => this.setState({
          imageURL: json.data.message
        }))
        .catch(error => alert(error))
    }
  }

  render() {
    const dogs = this.state.dogs;
    const imageterm = this.state.imageterm;
    const imageURL = this.state.imageURL;
    return (

      <div className = "container" data-test="container-component">
      <DoggoPicture
      imageterm = {imageterm}
      imageURL = {imageURL}/>
      <DoggoLabel
      message = {imageterm}/>
      <BreedList
      dogs = {dogs}
      imageterm = {imageterm}
      changeDoggo = {this.changeDoggo.bind(this)}/>
      </div>
    );
  }
}

export default App;
