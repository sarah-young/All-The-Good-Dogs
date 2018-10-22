import React from 'react';
import axios from 'axios';
import BreedList from './components/BreedList';
import DoggoLabel from './components/DoggoLabel';
import DoggoPicture from './components/DoggoPicture';

//Main App Component
 class App extends React.Component {
   constructor(props) {
   super(props)
   this.state = {
     dogs: [],
     imageterm: 'random',
     isLoading: false
     }
   }

   componentDidMount(){
     this.setState( {isLoading: true })
     axios.get('https://dog.ceo/api/breeds/list/all')
     .then(json => this.setState({dogs: json.data.message, isLoading: false}))
     .catch(error => alert(error))
     }

  render() {
    const dogs = this.state.dogs;
    const imageterm = this.state.imageterm;
    return (
          <div className="app w3-row" >
            <h2 className="app-title w3-col l12 m12 s12">Dog Breed Selector <span role="img" aria-label="dog">🐶</span></h2>
            <DoggoPicture image="default-photo.jpeg" alt="dog eyes staring from screen"/>
            <BreedList dogs ={dogs}/>
            <DoggoLabel message={imageterm}  />
          </div>
    );
  }
}

export default App;
