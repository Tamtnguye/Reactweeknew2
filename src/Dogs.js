import React from 'react';

import axios from 'axios';

export default class DogList extends React.Component {
  state = {
    doggie: []
  }

  componentDidMount() {
    axios.get(`https://dog.ceo/api/breeds/image/random`)
      .then(res => {
        const doggie = res.data;
        this.setState({ doggie });
        console.log(doggie)
      })
  }

  render() {
    return (
      <ul>
        { <li><img src={this.state.doggie.message}></img></li>}
        
      </ul>
    )
  }
}