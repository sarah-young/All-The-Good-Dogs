import React from 'react';
import axios from 'axios';

class DoggoPicture extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    image: null,
    imageterm: this.props.imageterm,
    isLoading: false
    }
  }

  componentDidMount(){
    this.setState( {isLoading: true })
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(json => this.setState({image: json.data.message, isLoading: false}))
    .catch(error => alert(error))
    }

  render() {
    const image = this.state.image
    const alt = this.props.alt;
    return (
      <img src={image} alt={alt} className="doggo-image w3-col l6 m6" />
    );
  }
}

export default DoggoPicture;
