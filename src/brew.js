import axios from 'axios';
import React, { useState, useEffect } from "react";



export default class Beer extends React.Component{
  state ={
    brews: [],
  };

  componentDidMount(){
    axios.get('https://api.openbrewerydb.org/breweries?per_page=25')
    .then(res => {
      console.log(res);
      this.setState({ brews: res.data});
    });
  }


render() {
return <ul>
  {this.state.brews.map(person => <li key={person.id}>{person.name}</li>)}
  
  {this.state.brews.map(person => <li key={person.id}>{person.brewery_type}</li>)}
  </ul>;

}

}