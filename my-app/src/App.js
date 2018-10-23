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

   changeDoggo(id) {
     console.log(id);
     axios.get('https://dog.ceo/api/breed/'+id+'/images/random')
     .then(json => this.setState({imageURL: json.data.message, id: id}))
     .catch(error => alert(error))
   }

   componentDidMount(){
     this.setState( {isLoading: true })
     axios.get('https://dog.ceo/api/breeds/list/all')
     .then(json => this.setState({dogs: json.data.message, isLoading: false}))
     .catch(error => alert(error))
     if(this.state.imageterm === 'random') {
     axios.get('https://dog.ceo/api/breeds/image/random')
     .then(json => this.setState({imageURL: json.data.message}))
     .catch(error => alert(error)) } else{
       axios.get('https://dog.ceo/api/breed/'+ this.state.imageterm +'/images/random')
       .then(json => this.setState({imageURL: json.data.message}))
       .catch(error => alert(error)) }
     }
     // TODO: I am setting state here too many times
     // Each time the state is set the app is re-rendering
     // Is there a way to consolidate the setState?


  render() {
  
    const dogs = this.state.dogs;
    const imageterm = this.state.imageterm;
    const imageURL = this.state.imageURL;

    return (

    //TODO: Pass down function to add to event listener in <Breed />
          <div className="app w3-row" >
            <h2 className="app-title w3-col l12 m12 s12">Dog Breed Selector <span role="img" aria-label="dog">🐶</span></h2>
            <DoggoPicture imageterm={imageterm} imageURL={imageURL}/>
            <DoggoLabel message={imageterm} />
            <BreedList dogs={dogs} imageterm={imageterm} changeDoggo={this.changeDoggo.bind(this)} />
          </div>
    );
  }
}

export default App;
