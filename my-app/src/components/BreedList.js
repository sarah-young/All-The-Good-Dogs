import React from 'react';
import axios from 'axios';
import Breed from './Breed';

//Breed List Component
class BreedList extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    dogs: []
    }
  }
  componentDidMount(){
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then(json => this.setState({dogs: json.data.message}))
    .catch(error => alert(error))
    }

  render() {
    const title = "Dog Breed List";
    const rows = [];
    const breedlist = this.props.breedlist;
    let i;
    for (i = 0; i < breedlist.length; i++) {
    rows.push(<Breed breed={breedlist[i]} />)
    }
    return (

      <div className="breed-list w3-col l6 m6">
      <select name={title} className="dog-breed-list-container">
      {rows}
      </select>
      </div>

    );
  }
}

  export default BreedList;
